// mata-kuliah/mata-kuliah.service.ts - UPDATE DENGAN SEMUA METHOD
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Mahasiswa } from 'src/mahasiswa/entities/mahasiswa.entity';

@Injectable()
export class MataKuliahService {
  constructor(private prisma: PrismaService) {}

  // Method untuk create
  async createMatakuliah(data: any) {
    try {
      const { nama_matakuliah, sks, id_dosen } = data;

      console.log('Creating matakuliah:', data);

      // Validasi data wajib
      if (!nama_matakuliah || !sks || !id_dosen) {
        return {
          status: 'false',
          message: 'Data tidak lengkap. Butuh: nama_matakuliah, sks, id_dosen'
        };
      }

      // Validasi: Cek apakah dosen ada
      const dosen = await this.prisma.dosen.findUnique({
        where: { id: id_dosen }
      });

      if (!dosen) {
        return {
          status: 'false',
          message: `Dosen dengan ID ${id_dosen} tidak ditemukan`
        };
      }

      // VALIDASI: Cek duplikasi nama matakuliah untuk dosen yang sama
      const existingMatakuliah = await this.prisma.matakuliah.findFirst({
        where: {
          nama_matakuliah: nama_matakuliah,
          id_dosen: id_dosen
        }
      });

      if (existingMatakuliah) {
        return {
          status: 'false',
          message: `Matakuliah "${nama_matakuliah}" sudah ada untuk dosen ${dosen.nama_dosen}. Gunakan nama yang berbeda atau pilih dosen lain.`
        };
      }

      // Validasi: SKS antara 1-6
      if (sks < 1 || sks > 6) {
        return {
          status: 'false',
          message: 'SKS harus antara 1-6'
        };
      }

      // Validasi: Nama matakuliah tidak boleh kosong atau hanya spasi
      if (!nama_matakuliah.trim()) {
        return {
          status: 'false',
          message: 'Nama matakuliah tidak boleh kosong'
        };
      }

      // Buat matakuliah
      const matakuliah = await this.prisma.matakuliah.create({
        data: {
          nama_matakuliah: nama_matakuliah.trim(),
          sks,
          id_dosen
        },
        include: {
          dosen: {
            select: {
              id: true,
              nama_dosen: true
            }
          }
        }
      });

      console.log('Matakuliah created:', matakuliah.id_matakuliah);

      return {
        status: 'success',
        message: 'Matakuliah berhasil dibuat',
        data: matakuliah
      };

    } catch (error: any) {
      console.error('Create matakuliah error:', error);

      // Tangkap error constraint violation dari Prisma
      if (error.code === 'P2002') {
        return {
          status: 'false',
          message: 'Matakuliah dengan nama dan dosen yang sama sudah ada'
        };
      }

      return {
        status: 'false',
        message: `Gagal membuat matakuliah: ${error.message}`
      };
    }
  }

  // Method untuk findAll dengan filters
  async findAll(filters?: {
    nama?: string;
    id_dosen?: number;
    sks?: number;
  }) {
    try {
      const whereClause: any = {};

      if (filters?.nama) {
        whereClause.nama_matakuliah = {
          contains: filters.nama
        };
      }

      if (filters?.id_dosen) {
        whereClause.id_dosen = filters.id_dosen;
      }

      if (filters?.sks) {
        whereClause.sks = filters.sks;
      }

      const matakuliahList = await this.prisma.matakuliah.findMany({
        where: whereClause,
        include: {
          dosen: {
            select: {
              id: true,
              nama_dosen: true,
              nidn: true
            }
          },
          _count: {
            select: {
              krs: true,
              penjadwalan: true
            }
          }
        },
        orderBy: {
          nama_matakuliah: 'asc'
        }
      });

      // Group by dosen untuk statistik
      const groupedByDosen = matakuliahList.reduce((acc, mk) => {
        const dosenId = mk.id_dosen;
        if (!acc[dosenId]) {
          acc[dosenId] = {
            dosen: mk.dosen,
            matakuliah: [],
            total_sks: 0,
            total_matakuliah: 0
          };
        }
        acc[dosenId].matakuliah.push(mk);
        acc[dosenId].total_sks += mk.sks;
        acc[dosenId].total_matakuliah++;
        return acc;
      }, {});

      return {
        status: 'success',
        message: 'Data matakuliah berhasil diambil',
        data: {
          matakuliah: matakuliahList,
          summary: {
            total: matakuliahList.length,
            total_sks: matakuliahList.reduce((sum, mk) => sum + mk.sks, 0),
            grouped_by_dosen: groupedByDosen
          }
        }
      };

    } catch (error: any) {
      console.error('FindAll matakuliah error:', error);
      return {
        status: 'false',
        message: 'Gagal mengambil data matakuliah'
      };
    }
  }

  // Method untuk findOne
  async findOne(id: number) {
    try {
      const matakuliah = await this.prisma.matakuliah.findUnique({
        where: { id_matakuliah: id },
        include: {
          dosen: {
            select: {
              id: true,
              nama_dosen: true,
              nidn: true
            }
          },
          krs: {
            include: {
              mahasiswa: {
                select: {
                  id: true,
                  nim: true,
                  nama_mahasiswa: true
                }
              }
            }
          },
          penjadwalan: true
        }
      });

      if (!matakuliah) {
        return {
          status: 'false',
          message: `Matakuliah dengan ID ${id} tidak ditemukan`
        };
      }

      return {
        status: 'success',
        message: 'Matakuliah berhasil ditemukan',
        data: matakuliah
      };

    } catch (error: any) {
      console.error('FindOne matakuliah error:', error);
      return {
        status: 'false',
        message: 'Gagal mengambil data matakuliah'
      };
    }
  }

  // Method untuk update
  async update(id: number, data: any) {
    try {
      const { nama_matakuliah, sks, id_dosen } = data;

      console.log('Updating matakuliah:', id, data);

      // Cek apakah matakuliah ada
      const existing = await this.prisma.matakuliah.findUnique({
        where: { id_matakuliah: id }
      });

      if (!existing) {
        return {
          status: 'false',
          message: `Matakuliah dengan ID ${id} tidak ditemukan`
        };
      }

      // Jika ada perubahan nama atau dosen, cek duplikasi
      if (nama_matakuliah || id_dosen) {
        const whereClause: any = {
          NOT: { id_matakuliah: id } // Kecualikan matakuliah yang sedang diupdate
        };

        if (nama_matakuliah) whereClause.nama_matakuliah = nama_matakuliah.trim();
        if (id_dosen) whereClause.id_dosen = id_dosen;

        const duplicate = await this.prisma.matakuliah.findFirst({
          where: whereClause
        });

        if (duplicate) {
          const dosenNama = duplicate.id_dosen === id_dosen ? 
            'dosen yang sama' : `dosen ID ${duplicate.id_dosen}`;
          
          return {
            status: 'false',
            message: `Matakuliah "${nama_matakuliah || existing.nama_matakuliah}" sudah ada untuk ${dosenNama}`
          };
        }
      }

      // Jika ada id_dosen, cek apakah dosen ada
      if (id_dosen) {
        const dosen = await this.prisma.dosen.findUnique({
          where: { id: id_dosen }
        });

        if (!dosen) {
          return {
            status: 'false',
            message: `Dosen dengan ID ${id_dosen} tidak ditemukan`
          };
        }
      }

      // Validasi: SKS antara 1-6
      if (sks && (sks < 1 || sks > 6)) {
        return {
          status: 'false',
          message: 'SKS harus antara 1-6'
        };
      }

      // Update matakuliah
      const updated = await this.prisma.matakuliah.update({
        where: { id_matakuliah: id },
        data: {
          nama_matakuliah: nama_matakuliah ? nama_matakuliah.trim() : undefined,
          sks,
          id_dosen
        },
        include: {
          dosen: true
        }
      });

      return {
        status: 'success',
        message: 'Matakuliah berhasil diupdate',
        data: updated
      };

    } catch (error: any) {
      console.error('Update matakuliah error:', error);

      if (error.code === 'P2002') {
        return {
          status: 'false',
          message: 'Matakuliah dengan nama dan dosen yang sama sudah ada'
        };
      }

      if (error.code === 'P2025') {
        return {
          status: 'false',
          message: 'Matakuliah tidak ditemukan'
        };
      }

      return {
        status: 'false',
        message: `Gagal update matakuliah: ${error.message}`
      };
    }
  }

  // Method untuk remove
  async remove(id: number) {
    try {
      console.log('Deleting matakuliah:', id);

      // Cek apakah matakuliah ada
      const existing = await this.prisma.matakuliah.findUnique({
        where: { id_matakuliah: id },
        include: {
          _count: {
            select: {
              krs: true,
              penjadwalan: true
            }
          }
        }
      });

      if (!existing) {
        return {
          status: 'false',
          message: `Matakuliah dengan ID ${id} tidak ditemukan`
        };
      }

      // Cek apakah matakuliah sudah digunakan
      if (existing._count.krs > 0 || existing._count.penjadwalan > 0) {
        return {
          status: 'false',
          message: `Matakuliah tidak dapat dihapus karena sudah digunakan (${existing._count.krs} KRS, ${existing._count.penjadwalan} penjadwalan)`
        };
      }

      // Hapus matakuliah
      await this.prisma.matakuliah.delete({
        where: { id_matakuliah: id }
      });

      return {
        status: 'success',
        message: 'Matakuliah berhasil dihapus'
      };

    } catch (error: any) {
      console.error('Delete matakuliah error:', error);

      if (error.code === 'P2025') {
        return {
          status: 'false',
          message: 'Matakuliah tidak ditemukan'
        };
      }

      return {
        status: 'false',
        message: `Gagal menghapus matakuliah: ${error.message}`
      };
    }
  }

  // Method untuk checkDuplicate
  async checkDuplicate(nama_matakuliah: string, id_dosen: number, excludeId?: number) {
    try {
      const whereClause: any = {
        nama_matakuliah: nama_matakuliah.trim(),
        id_dosen: id_dosen
      };

      if (excludeId) {
        whereClause.NOT = { id_matakuliah: excludeId };
      }

      const existing = await this.prisma.matakuliah.findFirst({
        where: whereClause,
        include: {
          dosen: true
        }
      });

      return {
        exists: !!existing,
        data: existing
      };

    } catch (error) {
      console.error('Check duplicate error:', error);
      return { exists: false, data: null };
    }
  }

  // Method untuk findByNamaAndDosen
  async findByNamaAndDosen(nama: string, id_dosen: number) {
    try {
      const matakuliah = await this.prisma.matakuliah.findFirst({
        where: {
          nama_matakuliah: {
            contains: nama
          },
          id_dosen: id_dosen
        },
        include: {
          dosen: true
        }
      });

      if (!matakuliah) {
        return {
          status: 'false',
          message: `Matakuliah "${nama}" tidak ditemukan untuk dosen ID ${id_dosen}`
        };
      }

      return {
        status: 'success',
        message: 'Matakuliah ditemukan',
        data: matakuliah
      };

    } catch (error) {
      console.error('Find by nama and dosen error:', error);
      return {
        status: 'false',
        message: 'Gagal mencari matakuliah'
      };
    }
  }
}