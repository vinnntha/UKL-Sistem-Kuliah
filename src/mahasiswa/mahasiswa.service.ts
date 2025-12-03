import { Injectable } from '@nestjs/common';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MahasiswaService {
  constructor(private prisma: PrismaService) { }
  
  async create(createMahasiswaDto: CreateMahasiswaDto) {
    const { nim, nama_mahasiswa, jenis_kelamin, jurusan } = createMahasiswaDto;
    
    try {
      // Validasi NIM format
      if (!nim || nim.trim() === '') {
        return {
          status: 'false',
          message: 'NIM tidak boleh kosong',
        };
      }

      const mahasiswa = await this.prisma.mahasiswa.create({
        data: {
          nim,
          nama_mahasiswa,
          jenis_kelamin,
          jurusan,
        },
      });

      return {
        status: 'success',
        message: 'Mahasiswa has been added',
        data: mahasiswa
      };
    } catch (error) {
      console.error('Error creating mahasiswa:', error);
      
      if (error.code === 'P2002') {
        return {
          status: 'false',
          message: `NIM ${nim} sudah digunakan`,
        };
      }
      
      return {
        status: 'false',
        message: 'Mahasiswa tidak dapat dibuat'
      };
    }
  }

  async findAll() {
    try {
      const mahasiswa = await this.prisma.mahasiswa.findMany({
        orderBy: {
          nama_mahasiswa: 'asc',
        },
      });

      return {
        status: 'success',
        message: 'Data mahasiswa berhasil diambil',
        data: mahasiswa
      };
    } catch (error) {
      console.error('Error finding all mahasiswa:', error);
      return {
        status: 'false',
        message: 'Gagal mengambil data mahasiswa'
      };
    }
  }

  async findByNim(nim: string) {
    try {
      if (!nim || nim.trim() === '') {
        return {
          status: 'false',
          message: 'NIM is required'
        };
      }

      const mahasiswa = await this.prisma.mahasiswa.findUnique({
        where: { nim: nim }
      });

      if (!mahasiswa) {
        return {
          status: 'false',
          message: `Mahasiswa dengan NIM ${nim} tidak ditemukan`,
        };
      }

      return {
        status: 'success',
        message: 'Mahasiswa has been found successfully',
        data: mahasiswa
      };
    } catch (error) {
      console.error('Error finding mahasiswa by NIM:', error);
      return {
        status: 'false',
        message: 'Gagal mencari mahasiswa'
      };
    }
  }

  async updateByNim(nim: string, updateMahasiswaDto: UpdateMahasiswaDto) {
    try {
      const { nama_mahasiswa, jenis_kelamin, jurusan } = updateMahasiswaDto;

      if (!nim || nim.trim() === '') {
        return {
          status: 'false',
          message: 'NIM is required'
        };
      }

      // Cek apakah mahasiswa exist
      const existingMahasiswa = await this.prisma.mahasiswa.findUnique({
        where: { nim: nim }
      });

      if (!existingMahasiswa) {
        return {
          status: 'false',
          message: `Mahasiswa dengan NIM ${nim} tidak ditemukan`,
        };
      }

      const mahasiswa = await this.prisma.mahasiswa.update({
        where: { nim: nim },
        data: {
          nama_mahasiswa: nama_mahasiswa || existingMahasiswa.nama_mahasiswa,
          jenis_kelamin: jenis_kelamin || existingMahasiswa.jenis_kelamin,
          jurusan: jurusan || existingMahasiswa.jurusan,
        },
      });

      return {
        status: 'success',
        message: 'Mahasiswa update successfully',
        data: mahasiswa
      };
    } catch (error) {
      console.error('Error updating mahasiswa:', error);
      
      if (error.code === 'P2025') {
        return {
          status: 'false',
          message: `Mahasiswa dengan NIM ${nim} tidak ditemukan`,
        };
      }
      
      return {
        status: 'false',
        message: 'Gagal mengupdate mahasiswa'
      };
    }
  }

  async removeByNim(nim: string) {
    try {
      if (!nim || nim.trim() === '') {
        return {
          status: 'false',
          message: 'NIM is required'
        };
      }

      // Cek apakah mahasiswa exist
      const existingMahasiswa = await this.prisma.mahasiswa.findUnique({
        where: { nim: nim }
      });

      if (!existingMahasiswa) {
        return {
          status: 'false',
          message: `Mahasiswa dengan NIM ${nim} tidak ditemukan`,
        };
      }

      // Cek apakah mahasiswa memiliki KRS
      const hasKRS = await this.prisma.krs.findFirst({
        where: { mahasiswa_id: existingMahasiswa.id },
      });

      if (hasKRS) {
        return {
          status: 'false',
          message: 'Tidak dapat menghapus mahasiswa karena memiliki KRS',
        };
      }

      await this.prisma.mahasiswa.delete({
        where: { nim: nim }
      });

      return {
        status: 'success',
        message: 'Mahasiswa has been deleted successfully'
      };
    } catch (error) {
      console.error('Error removing mahasiswa:', error);
      
      if (error.code === 'P2025') {
        return {
          status: 'false',
          message: `Mahasiswa dengan NIM ${nim} tidak ditemukan`,
        };
      }
      
      return {
        status: 'false',
        message: 'Gagal menghapus mahasiswa'
      };
    }
  }

  // Tambahan: Find mahasiswa by ID
  async findById(id: number) {
    try {
      const mahasiswa = await this.prisma.mahasiswa.findUnique({
        where: { id },
      });

      if (!mahasiswa) {
        return {
          status: 'false',
          message: `Mahasiswa dengan ID ${id} tidak ditemukan`,
        };
      }

      return {
        status: 'success',
        message: 'Data mahasiswa berhasil diambil',
        data: mahasiswa
      };
    } catch (error) {
      console.error('Error finding mahasiswa by ID:', error);
      return {
        status: 'false',
        message: 'Gagal mencari mahasiswa'
      };
    }
  }

  // Tambahan: Cari mahasiswa berdasarkan jurusan
  async findByJurusan(jurusan: string) {
    try {
      const mahasiswa = await this.prisma.mahasiswa.findMany({
        where: { 
          jurusan: {
            contains: jurusan
          }
        },
        orderBy: {
          nama_mahasiswa: 'asc',
        },
      });

      return {
        status: 'success',
        message: `Data mahasiswa jurusan ${jurusan} berhasil diambil`,
        data: mahasiswa,
        total: mahasiswa.length,
      };
    } catch (error) {
      console.error('Error finding mahasiswa by jurusan:', error);
      return {
        status: 'false',
        message: 'Gagal mencari mahasiswa berdasarkan jurusan'
      };
    }
  }
  
}