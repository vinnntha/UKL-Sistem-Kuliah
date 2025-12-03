// auth/auth.service.ts
import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  // REGISTER - Mendaftarkan user baru
  async register(username: string, password: string, role: string, mahasiswa_id?: number) {
    try {
      console.log('Register attempt for:', username);
      
      // Validasi input
      if (!username || !password || !role) {
        throw new BadRequestException('Username, password, dan role wajib diisi');
      }

      // Validasi role
      const validRoles = ['admin', 'mahasiswa'];
      if (!validRoles.includes(role.toLowerCase())) {
        throw new BadRequestException('Role harus admin atau mahasiswa');
      }

      // Cek apakah username sudah digunakan
      const existingUser = await this.prisma.user.findUnique({
        where: { username },
      });

      if (existingUser) {
        throw new ConflictException(`Username ${username} sudah digunakan`);
      }

      // Cek mahasiswa jika role mahasiswa
      if (role.toLowerCase() === 'mahasiswa' && mahasiswa_id) {
        const mahasiswa = await this.prisma.mahasiswa.findUnique({
          where: { id: mahasiswa_id },
        });

        if (!mahasiswa) {
          throw new BadRequestException(`Mahasiswa dengan ID ${mahasiswa_id} tidak ditemukan`);
        }

        // Cek apakah mahasiswa sudah punya user
        const existingMahasiswaUser = await this.prisma.user.findUnique({
          where: { mahasiswaId: mahasiswa_id },
        });

        if (existingMahasiswaUser) {
          throw new ConflictException(`Mahasiswa ini sudah memiliki akun`);
        }
      }

      // Hash password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Buat user baru
      const newUser = await this.prisma.user.create({
        data: {
          username,
          password: hashedPassword,
          role: role.toLowerCase(),
          mahasiswaId: role.toLowerCase() === 'mahasiswa' ? mahasiswa_id : null,
        },
      });

      // Hapus password dari response
      const { password: _, ...userWithoutPassword } = newUser;

      return {
        status: 'success',
        message: 'Registrasi berhasil',
        data: {
          user: userWithoutPassword,
        },
      };
    } catch (error) {
      console.error('Register error:', error);
      
      if (error instanceof ConflictException || 
          error instanceof BadRequestException) {
        throw error;
      }
      
      throw new BadRequestException('Gagal melakukan registrasi');
    }
  }

  // REGISTER MAHASISWA - Buat mahasiswa + user sekaligus
  async registerMahasiswa(registerDto: {
    username: string;
    password: string;
    nim: string;
    nama_mahasiswa: string;
    jenis_kelamin: string;
    jurusan: string;
  }) {
    try {
      const { username, password, nim, nama_mahasiswa, jenis_kelamin, jurusan } = registerDto;

      console.log('Register mahasiswa:', { username, nim });

      // Validasi NIM unik
      const existingNim = await this.prisma.mahasiswa.findUnique({
        where: { nim },
      });

      if (existingNim) {
        throw new ConflictException(`NIM ${nim} sudah terdaftar`);
      }

      // Validasi username unik
      const existingUsername = await this.prisma.user.findUnique({
        where: { username },
      });

      if (existingUsername) {
        throw new ConflictException(`Username ${username} sudah digunakan`);
      }

      // Hash password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Buat mahasiswa dan user dalam transaction
      const result = await this.prisma.$transaction(async (tx) => {
        // 1. Buat mahasiswa
        const mahasiswa = await tx.mahasiswa.create({
          data: {
            nim,
            nama_mahasiswa,
            jenis_kelamin,
            jurusan,
          },
        });

        // 2. Buat user dengan role mahasiswa
        const user = await tx.user.create({
          data: {
            username,
            password: hashedPassword,
            role: 'mahasiswa',
            mahasiswaId: mahasiswa.id,
          },
          select: {
            id: true,
            username: true,
            role: true,
            mahasiswaId: true,
          },
        });

        return { mahasiswa, user };
      });

      return {
        status: 'success',
        message: 'Registrasi mahasiswa berhasil',
        data: {
          mahasiswa: {
            id: result.mahasiswa.id,
            nim: result.mahasiswa.nim,
            nama_mahasiswa: result.mahasiswa.nama_mahasiswa,
            jurusan: result.mahasiswa.jurusan,
          },
          user: result.user,
        },
      };
    } catch (error) {
      console.error('Register mahasiswa error:', error);
      
      if (error instanceof ConflictException) {
        throw error;
      }
      
      throw new BadRequestException('Gagal registrasi mahasiswa');
    }
  }

 async login(username: string, password: string) {
  try {
    console.log('Login attempt for:', username);
    
    // Cari user dengan INCLUDE mahasiswa
    const user = await this.prisma.user.findUnique({
      where: { username },
      include: {
        mahasiswa: true, // INCLUDE relation
      },
    });

    if (!user) {
      console.log('User not found:', username);
      throw new UnauthorizedException('Username atau password salah');
    }

    // Verifikasi password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid password for:', username);
      throw new UnauthorizedException('Username atau password salah');
    }

    // Debug: Cek data user
    console.log('User data:', {
      id: user.id,
      username: user.username,
      role: user.role,
      mahasiswaId: user.mahasiswaId,
      mahasiswa: user.mahasiswa
    });

    // Buat payload JWT - PASTIKAN mahasiswa_id diambil dari user.mahasiswaId
    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role,
      mahasiswa_id: user.mahasiswaId, // INI YANG PENTING
    };

    console.log('JWT Payload:', payload);

    // Generate token
    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET || 'Secret_Key',
      expiresIn: '1d',
    });

    return {
      status: 'success',
      message: 'Login berhasil',
      data: {
        token,
        role: user.role,
        username: user.username,
        mahasiswa_id: user.mahasiswaId, // KIRIM DI RESPONSE JUGA
      },
    };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

  // REFRESH TOKEN (opsional)
  async refreshToken(user: any) {
    try {
      const payload = {
        sub: user.sub,
        username: user.username,
        role: user.role,
        mahasiswa_id: user.mahasiswa_id,
      };

      const newToken = await this.jwtService.signAsync(payload, {
        secret: process.env.JWT_SECRET || 'Secret_Key',
        expiresIn: '1d',
      });

      return {
        status: 'success',
        message: 'Token refreshed',
        data: {
          token: newToken,
          role: user.role,
          username: user.username,
        },
      };
    } catch (error) {
      console.error('Refresh token error:', error);
      throw new UnauthorizedException('Gagal merefresh token');
    }
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { username },
    });

    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}