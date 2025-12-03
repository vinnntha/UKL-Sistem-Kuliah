// penjadwalan.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePenjadwalanDto } from './dto/create-penjadwalan.dto';
import { UpdatePenjadwalanDto } from './dto/update-penjadwalan.dto';

@Injectable()
export class PenjadwalanService {
  constructor(private prisma: PrismaService) {}

  // 5.a. Menambah Penjadwalan
  async create(createPenjadwalanDto: CreatePenjadwalanDto) {
    try {
      const { id_dosen, id_matakuliah, jadwal, tahun_ajaran, semester } = createPenjadwalanDto;

      // Validasi dosen exist
      const dosenExist = await this.prisma.dosen.findUnique({
        where: { id: id_dosen },
      });

      if (!dosenExist) {
        return {
          status: 'false',
          message: 'Dosen tidak ditemukan',
        };
      }

      // Validasi matakuliah exist - PERBAIKAN: id_matakuliah bukan id
      const matakuliahExist = await this.prisma.matakuliah.findUnique({
        where: { id_matakuliah: id_matakuliah }, // PERBAIKAN: id_matakuliah bukan id
      });

      if (!matakuliahExist) {
        return {
          status: 'false',
          message: 'Mata kuliah tidak ditemukan',
        };
      }

      // Cek apakah jadwal sudah ada untuk dosen/matakuliah di semester yang sama
      const existingJadwal = await this.prisma.penjadwalan.findFirst({
        where: {
          OR: [
            {
              id_dosen,
              semester,
              tahun_ajaran,
              jadwal,
            },
            {
              id_matakuliah,
              semester,
              tahun_ajaran,
              jadwal,
            },
          ],
        },
      });

      if (existingJadwal) {
        return {
          status: 'false',
          message: 'Jadwal bertabrakan dengan penjadwalan yang sudah ada',
        };
      }

      // Create penjadwalan
      const penjadwalan = await this.prisma.penjadwalan.create({
        data: {
          id_dosen,
          id_matakuliah,
          jadwal,
          tahun_ajaran,
          semester,
        },
        include: {
          dosen: {
            select: {
              id: true,
              nidn: true,
              nama_dosen: true,
            },
          },
          matakuliah: { // PERBAIKAN: matakuliah (bukan mataKuliah)
            select: {
              id_matakuliah: true, // PERBAIKAN: id_matakuliah bukan id
              nama_matakuliah: true,
              sks: true,
            },
          },
        },
      });

      return {
        status: 'success',
        message: 'Penjadwalan berhasil ditambahkan',
        data: {
          id: penjadwalan.id,
          id_dosen: penjadwalan.id_dosen,
          id_matakuliah: penjadwalan.id_matakuliah,
          jadwal: penjadwalan.jadwal,
          tahun_ajaran: penjadwalan.tahun_ajaran,
          semester: penjadwalan.semester,
          dosen: penjadwalan.dosen,
          matakuliah: penjadwalan.matakuliah, // PERBAIKAN: matakuliah bukan mataKuliah
        },
      };
    } catch (error) {
      console.error('Error creating penjadwalan:', error);
      
      // Handle Prisma error codes
      if (error.code === 'P2002') {
        return {
          status: 'false',
          message: 'Penjadwalan dengan kombinasi yang sama sudah ada',
        };
      }
      
      if (error.code === 'P2003') {
        return {
          status: 'false',
          message: 'Foreign key constraint failed (dosen atau matakuliah tidak valid)',
        };
      }
      
      return {
        status: 'false',
        message: 'Gagal menambahkan penjadwalan',
      };
    }
  }

  // 5.b. Mengambil Data Penjadwalan (Detail by ID)
  async findOne(id: number) {
    try {
      const penjadwalan = await this.prisma.penjadwalan.findUnique({
        where: { id },
        include: {
          dosen: {
            select: {
              id: true,
              nidn: true,
              nama_dosen: true,
              jenis_kelamin: true,
            },
          },
          matakuliah: { // PERBAIKAN: matakuliah bukan mataKuliah
            select: {
              id_matakuliah: true, // PERBAIKAN: id_matakuliah bukan id
              nama_matakuliah: true,
              sks: true,
            },
          },
        },
      });

      if (!penjadwalan) {
        return {
          status: 'false',
          message: 'Penjadwalan tidak ditemukan',
        };
      }

      return {
        status: 'success',
        message: 'Data penjadwalan berhasil diambil',
        data: {
          id: penjadwalan.id,
          id_dosen: penjadwalan.id_dosen,
          id_matakuliah: penjadwalan.id_matakuliah,
          jadwal: penjadwalan.jadwal,
          tahun_ajaran: penjadwalan.tahun_ajaran,
          semester: penjadwalan.semester,
          dosen: penjadwalan.dosen,
          matakuliah: penjadwalan.matakuliah, // PERBAIKAN: matakuliah bukan mataKuliah
        },
      };
    } catch (error) {
      console.error('Error finding penjadwalan:', error);
      return {
        status: 'false',
        message: 'Gagal mengambil data penjadwalan',
      };
    }
  }

  // 5.c. Mengambil Seluruh Data Penjadwalan
  async findAll() {
    try {
      const penjadwalan = await this.prisma.penjadwalan.findMany({
        include: {
          dosen: {
            select: {
              id: true,
              nidn: true,
              nama_dosen: true,
            },
          },
          matakuliah: { // PERBAIKAN: matakuliah bukan mataKuliah
            select: {
              id_matakuliah: true, // PERBAIKAN: id_matakuliah bukan id
              nama_matakuliah: true,
              sks: true,
            },
          },
        },
        orderBy: {
          jadwal: 'asc',
        },
      });

      // Format response
      const formattedData = penjadwalan.map((item) => ({
        id: item.id,
        id_dosen: item.id_dosen,
        id_matakuliah: item.id_matakuliah,
        jadwal: item.jadwal,
        tahun_ajaran: item.tahun_ajaran,
        semester: item.semester,
        dosen: item.dosen,
        matakuliah: item.matakuliah, // PERBAIKAN: matakuliah bukan mataKuliah
      }));

      return {
        status: 'success',
        message: 'Data penjadwalan berhasil diambil',
        data: formattedData,
      };
    } catch (error) {
      console.error('Error finding all penjadwalan:', error);
      return {
        status: 'false',
        message: 'Gagal mengambil data penjadwalan',
      };
    }
  }

  // 5.d. Mengubah Data Penjadwalan
  async update(id: number, updatePenjadwalanDto: UpdatePenjadwalanDto) {
    try {
      // Cek apakah penjadwalan exist
      const existing = await this.prisma.penjadwalan.findUnique({
        where: { id },
      });

      if (!existing) {
        return {
          status: 'false',
          message: 'Penjadwalan tidak ditemukan',
        };
      }

      // Validasi jika ada update id_dosen
      if (updatePenjadwalanDto.id_dosen) {
        const dosenExist = await this.prisma.dosen.findUnique({
          where: { id: updatePenjadwalanDto.id_dosen },
        });

        if (!dosenExist) {
          return {
            status: 'false',
            message: 'Dosen tidak ditemukan',
          };
        }
      }

      // Validasi jika ada update id_matakuliah - PERBAIKAN: menggunakan id_matakuliah
      if (updatePenjadwalanDto.id_matakuliah) {
        const matakuliahExist = await this.prisma.matakuliah.findUnique({
          where: { id_matakuliah: updatePenjadwalanDto.id_matakuliah }, // PERBAIKAN: id_matakuliah bukan id
        });

        if (!matakuliahExist) {
          return {
            status: 'false',
            message: 'Mata kuliah tidak ditemukan',
          };
        }
      }

      // Cek jadwal bentrok (kecuali dengan dirinya sendiri)
      if (updatePenjadwalanDto.jadwal) {
        const conflictingJadwal = await this.prisma.penjadwalan.findFirst({
          where: {
            id: { not: id }, // Kecuali penjadwalan ini sendiri
            OR: [
              {
                id_dosen: updatePenjadwalanDto.id_dosen || existing.id_dosen,
                semester: updatePenjadwalanDto.semester || existing.semester,
                tahun_ajaran: updatePenjadwalanDto.tahun_ajaran || existing.tahun_ajaran,
                jadwal: updatePenjadwalanDto.jadwal,
              },
              {
                id_matakuliah: updatePenjadwalanDto.id_matakuliah || existing.id_matakuliah,
                semester: updatePenjadwalanDto.semester || existing.semester,
                tahun_ajaran: updatePenjadwalanDto.tahun_ajaran || existing.tahun_ajaran,
                jadwal: updatePenjadwalanDto.jadwal,
              },
            ],
          },
        });

        if (conflictingJadwal) {
          return {
            status: 'false',
            message: 'Jadwal bertabrakan dengan penjadwalan lain',
          };
        }
      }

      // Update data
      const updatedPenjadwalan = await this.prisma.penjadwalan.update({
        where: { id },
        data: updatePenjadwalanDto,
        include: {
          dosen: {
            select: {
              id: true,
              nidn: true,
              nama_dosen: true,
            },
          },
          matakuliah: { // PERBAIKAN: matakuliah bukan mataKuliah
            select: {
              id_matakuliah: true, // PERBAIKAN: id_matakuliah bukan id
              nama_matakuliah: true,
              sks: true,
            },
          },
        },
      });

      return {
        status: 'success',
        message: 'Penjadwalan berhasil diperbarui',
        data: {
          id: updatedPenjadwalan.id,
          id_dosen: updatedPenjadwalan.id_dosen,
          id_matakuliah: updatedPenjadwalan.id_matakuliah,
          jadwal: updatedPenjadwalan.jadwal,
          tahun_ajaran: updatedPenjadwalan.tahun_ajaran,
          semester: updatedPenjadwalan.semester,
          dosen: updatedPenjadwalan.dosen,
          matakuliah: updatedPenjadwalan.matakuliah, // PERBAIKAN: matakuliah bukan mataKuliah
        },
      };
    } catch (error) {
      console.error('Error updating penjadwalan:', error);
      
      // Handle specific Prisma errors
      if (error.code === 'P2025') {
        return {
          status: 'false',
          message: 'Penjadwalan tidak ditemukan',
        };
      }
      
      if (error.code === 'P2002') {
        return {
          status: 'false',
          message: 'Penjadwalan dengan kombinasi yang sama sudah ada',
        };
      }
      
      if (error.code === 'P2003') {
        return {
          status: 'false',
          message: 'Foreign key constraint failed',
        };
      }

      return {
        status: 'false',
        message: 'Gagal memperbarui penjadwalan',
      };
    }
  }

  // 5.e. Menghapus Data Penjadwalan
  async remove(id: number) {
    try {
      // Cek apakah penjadwalan exist
      const existing = await this.prisma.penjadwalan.findUnique({
        where: { id },
      });

      if (!existing) {
        return {
          status: 'false',
          message: 'Penjadwalan tidak ditemukan',
        };
      }

      // PERBAIKAN: Cek apakah penjadwalan sudah dipilih mahasiswa melalui KRS
      // Karena di schema Anda tidak ada model mahasiswaPilihMatakuliah
      const krsExist = await this.prisma.krs.findFirst({
        where: {
          matakuliah: {
            penjadwalan: {
              some: {
                id: id
              }
            }
          }
        },
      });

      if (krsExist) {
        return {
          status: 'false',
          message: 'Tidak dapat menghapus penjadwalan karena sudah dipilih mahasiswa',
        };
      }

      // Delete penjadwalan
      await this.prisma.penjadwalan.delete({
        where: { id },
      });

      return {
        status: 'success',
        message: 'Penjadwalan berhasil dihapus',
      };
    } catch (error) {
      console.error('Error removing penjadwalan:', error);
      
      if (error.code === 'P2025') {
        return {
          status: 'false',
          message: 'Penjadwalan tidak ditemukan',
        };
      }

      return {
        status: 'false',
        message: 'Gagal menghapus penjadwalan',
      };
    }
  }

  // Additional: Mencari penjadwalan berdasarkan filter
  async findByFilter(filters: {
    tahun_ajaran?: string;
    semester?: number;
    id_dosen?: number;
    id_matakuliah?: number;
  }) {
    try {
      const whereClause: any = {};

      if (filters.tahun_ajaran) {
        whereClause.tahun_ajaran = filters.tahun_ajaran;
      }

      if (filters.semester) {
        whereClause.semester = filters.semester;
      }

      if (filters.id_dosen) {
        whereClause.id_dosen = filters.id_dosen;
      }

      if (filters.id_matakuliah) {
        whereClause.id_matakuliah = filters.id_matakuliah;
      }

      const penjadwalan = await this.prisma.penjadwalan.findMany({
        where: whereClause,
        include: {
          dosen: {
            select: {
              id: true,
              nidn: true,
              nama_dosen: true,
            },
          },
          matakuliah: { // PERBAIKAN: matakuliah bukan mataKuliah
            select: {
              id_matakuliah: true, // PERBAIKAN: id_matakuliah bukan id
              nama_matakuliah: true,
              sks: true,
            },
          },
        },
        orderBy: {
          jadwal: 'asc',
        },
      });

      return {
        status: 'success',
        message: 'Data penjadwalan berhasil diambil',
        data: penjadwalan,
      };
    } catch (error) {
      console.error('Error finding penjadwalan by filter:', error);
      return {
        status: 'false',
        message: 'Gagal mengambil data penjadwalan',
      };
    }
  }

  // Get penjadwalan by dosen
  async findByDosen(id_dosen: number) {
    try {
      const penjadwalan = await this.prisma.penjadwalan.findMany({
        where: { id_dosen },
        include: {
          dosen: {
            select: {
              id: true,
              nidn: true,
              nama_dosen: true,
            },
          },
          matakuliah: {
            select: {
              id_matakuliah: true,
              nama_matakuliah: true,
              sks: true,
            },
          },
        },
        orderBy: {
          semester: 'asc',
        },
      });

      if (penjadwalan.length === 0) {
        return {
          status: 'false',
          message: `Tidak ada penjadwalan untuk dosen dengan ID ${id_dosen}`,
        };
      }

      return {
        status: 'success',
        message: 'Data penjadwalan dosen berhasil diambil',
        data: penjadwalan,
      };
    } catch (error) {
      console.error('Error finding penjadwalan by dosen:', error);
      return {
        status: 'false',
        message: 'Gagal mengambil data penjadwalan dosen',
      };
    }
  }

  // Get penjadwalan by matakuliah
  async findByMatakuliah(id_matakuliah: number) {
    try {
      const penjadwalan = await this.prisma.penjadwalan.findMany({
        where: { id_matakuliah },
        include: {
          dosen: {
            select: {
              id: true,
              nidn: true,
              nama_dosen: true,
            },
          },
          matakuliah: {
            select: {
              id_matakuliah: true,
              nama_matakuliah: true,
              sks: true,
            },
          },
        },
        orderBy: {
          semester: 'asc',
        },
      });

      if (penjadwalan.length === 0) {
        return {
          status: 'false',
          message: `Tidak ada penjadwalan untuk matakuliah dengan ID ${id_matakuliah}`,
        };
      }

      return {
        status: 'success',
        message: 'Data penjadwalan matakuliah berhasil diambil',
        data: penjadwalan,
      };
    } catch (error) {
      console.error('Error finding penjadwalan by matakuliah:', error);
      return {
        status: 'false',
        message: 'Gagal mengambil data penjadwalan matakuliah',
      };
    }
  }
}