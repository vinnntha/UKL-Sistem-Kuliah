import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDosenDto } from './dto/create-dosen.dto';
import { UpdateDosenDto } from './dto/update-dosen.dto';

@Injectable()
export class DosenService {
  constructor(private prisma: PrismaService) { }

  async create(createDosenDto: CreateDosenDto) {
    const { nidn, nama_dosen, jenis_kelamin, alamat } = createDosenDto;

    try {

      const validJenisKelamin = ['L', 'P', 'l', 'p'];
      if (!validJenisKelamin.includes(jenis_kelamin)) {
        return {
          status: 'false',
          message: 'Jenis kelamin harus L atau P',
        };
      }

      const dosen = await this.prisma.dosen.create({
        data: {
          nidn,
          nama_dosen,
          jenis_kelamin,
          alamat,
        },
      });

      return {
        status: 'success',
        message: 'Dosen added successfully',
        data: dosen,
      };
    } catch (error) {
      console.error('Error creating dosen:', error);

      if (error.code === 'P2002') {
        return {
          status: 'false',
          message: `NIDN ${nidn} sudah digunakan`,
        };
      }

      return {
        status: 'false',
        message: 'Gagal menambah dosen',
      };
    }
  }

  async findAll() {
    try {
      const dosen = await this.prisma.dosen.findMany({
        orderBy: {
          nama_dosen: 'asc',
        },
      });

      return {
        status: 'success',
        message: 'Data dosen berhasil diambil',
        data: dosen,
      };
    } catch (error) {
      console.error('Error finding all dosen:', error);
      return {
        status: 'false',
        message: 'Gagal mengambil data dosen',
      };
    }
  }

  async findOneByid(id: number) {
    try {
      const dosen = await this.prisma.dosen.findUnique({
        where: { id },
      });

      if (!dosen) {
        return {
          status: 'false',
          message: `Dosen dengan ID ${id} tidak ditemukan`,
        };
      }

      return {
        status: 'success',
        message: 'Data dosen berhasil diambil',
        data: dosen,
      };
    } catch (error) {
      console.error('Error finding dosen by ID:', error);
      return {
        status: 'false',
        message: 'Gagal mengambil data dosen',
      };
    }
  }

  async updateByid(id: number, updateDosenDto: UpdateDosenDto) {
    try {
      const { jenis_kelamin } = updateDosenDto
      const validJenisKelamin = ['L', 'P', 'l', 'p'];
      if (jenis_kelamin && !validJenisKelamin.includes(jenis_kelamin)) {
        return {
          status: 'false',
          message: 'Jenis kelamin harus L atau P',
        };
      }

      const existingDosen = await this.prisma.dosen.findUnique({
        where: { id },
      });

      if (!existingDosen) {
        return {
          status: 'false',
          message: `Dosen dengan ID ${id} tidak ditemukan`,
        };
      }

      const dosen = await this.prisma.dosen.update({
        where: { id },
        data: updateDosenDto,
      });

      return {
        status: 'success',
        message: 'Dosen updated successfully',
        data: dosen,
      };
    } catch (error) {
      console.error('Error updating dosen:', error);

      if (error.code === 'P2025') {
        return {
          status: 'false',
          message: `Dosen dengan ID ${id} tidak ditemukan`,
        };
      }

      return {
        status: 'false',
        message: 'Gagal mengupdate dosen',
      };
    }
  }

  async removeByid(id: number) {
    try {
      // Cek apakah dosen exist
      const existingDosen = await this.prisma.dosen.findUnique({
        where: { id },
      });

      if (!existingDosen) {
        return {
          status: 'false',
          message: `Dosen dengan ID ${id} tidak ditemukan`,
        };
      }

      // Cek apakah dosen memiliki relasi dengan matakuliah
      const hasMatakuliah = await this.prisma.matakuliah.findFirst({
        where: { id_dosen: id },
      });

      if (hasMatakuliah) {
        return {
          status: 'false',
          message: 'Tidak dapat menghapus dosen karena memiliki matakuliah',
        };
      }

      await this.prisma.dosen.delete({
        where: { id },
      });

      return {
        status: 'success',
        message: 'Dosen deleted successfully',
      };
    } catch (error) {
      console.error('Error removing dosen:', error);

      if (error.code === 'P2025') {
        return {
          status: 'false',
          message: `Dosen dengan ID ${id} tidak ditemukan`,
        };
      }

      return {
        status: 'false',
        message: 'Gagal menghapus dosen',
      };
    }
  }

  // Tambahan: Find dosen by NIDN
  async findByNidn(nidn: number) {
    try {
      const dosen = await this.prisma.dosen.findUnique({
        where: { nidn },
      });

      if (!dosen) {
        return {
          status: 'false',
          message: `Dosen dengan ID ${nidn} tidak ditemukan`,
        };
      }

      return {
        status: 'success',
        message: 'Data dosen berhasil diambil',
        data: dosen,
      };
    } catch (error) {
      console.error('Error finding dosen by NIDN:', error);
      return {
        status: 'false',
        message: 'Gagal mengambil data dosen',
      };
    }
  }
}