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
      // 1. Validasi NIM tidak kosong
      if (!nim || nim.trim() === '') {
        return {
          status: 'false',
          message: 'NIM tidak boleh kosong',
        };
      }

      // 2. Validasi format NIM (opsional)
      const nimRegex = /^[0-9]{1,6}$/; // Contoh: 8-15 digit angka
      if (!nimRegex.test(nim.trim())) {
        return {
          status: 'false',
          message: 'Format NIM tidak valid. Gunakan 1-6 digit angka',
        };
      }

      // 3. PRE-VALIDATION: Cek apakah NIM sudah ada
      const existingMahasiswa = await this.prisma.mahasiswa.findUnique({
        where: { nim: nim.trim() },
        select: { id: true, nim: true, nama_mahasiswa: true }
      });

      if (existingMahasiswa) {
        return {
          status: 'false',
          message: `NIM ${nim} sudah terdaftar atas nama ${existingMahasiswa.nama_mahasiswa}`,
          data: {
            existing_mahasiswa: existingMahasiswa
          }
        };
      }

      // 4. Validasi nama tidak kosong
      if (!nama_mahasiswa || nama_mahasiswa.trim() === '') {
        return {
          status: 'false',
          message: 'Nama mahasiswa tidak boleh kosong',
        };
      }

      // 5. Validasi jenis kelamin
      const validJenisKelamin = ['L', 'P', 'l', 'p'];
      if (!validJenisKelamin.includes(jenis_kelamin)) {
        return {
          status: 'false',
          message: 'Jenis kelamin harus L atau P',
        };
      }

      // 6. Validasi jurusan tidak kosong
      if (!jurusan || jurusan.trim() === '') {
        return {
          status: 'false',
          message: 'Jurusan tidak boleh kosong',
        };
      }

      // 7. Buat mahasiswa baru
      const mahasiswa = await this.prisma.mahasiswa.create({
        data: {
          nim: nim.trim(),
          nama_mahasiswa: nama_mahasiswa.trim(),
          jenis_kelamin: jenis_kelamin.toUpperCase(), // Simpan sebagai uppercase
          jurusan: jurusan.trim(),
        },
      });

      return {
        status: 'success',
        message: 'Mahasiswa berhasil ditambahkan',
        data: {
          ...mahasiswa,
          user_created: true
        }
      };

    } catch (error) {
      console.error('Error creating mahasiswa:', error);

      // CATCH VALIDATION sebagai backup
      if (error.code === 'P2002') {
        // Double check untuk memastikan
        const existing = await this.prisma.mahasiswa.findUnique({
          where: { nim: nim.trim() }
        });

        return {
          status: 'false',
          message: `NIM ${nim} sudah digunakan oleh ${existing?.nama_mahasiswa || 'mahasiswa lain'}`,
          data: existing ? {
            existing_id: existing.id,
            existing_nama: existing.nama_mahasiswa
          } : null
        };
      }

      return {
        status: 'false',
        message: `Gagal menambahkan mahasiswa: ${error.message || 'Unknown error'}`
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
      const validJenisKelamin = ['L', 'P', 'l', 'p'];
      if (jenis_kelamin && !validJenisKelamin.includes(jenis_kelamin)) {
        return {
          status: 'false',
          message: 'Jenis kelamin harus L atau P',
        };
      }
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