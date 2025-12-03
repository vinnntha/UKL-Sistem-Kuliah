// analisis.service.ts - DIPERBAIKI
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalisisService {
  constructor(private prisma: PrismaService) {}

  async getAnalisis(): Promise<any> {
    try {
      console.log('=== ANALISIS START ===');
      
      const allMatakuliah = await this.prisma.matakuliah.findMany({
        include: {
          dosen: {
            select: {
              id: true,
              nama_dosen: true
            }
          },
          krs: {
            select: {
              mahasiswa_id: true
            }
          }
        }
      });
      
      const allKrs = await this.prisma.krs.findMany();
      
      if (allKrs.length === 0) {
        return {
          status: 'success',
          message: 'Analisis berhasil diambil',
          data: {
            top_matakuliah: [],
            top_dosen: [],
            info: 'Belum ada data KRS'
          }
        };
      }
      
      // Format top matakuliah
      const topMatakuliah = allMatakuliah
        .map(mk => ({
          id_matakuliah: mk.id_matakuliah,
          nama_matakuliah: mk.nama_matakuliah,
          id_dosen: mk.id_dosen,
          nama_dosen: mk.dosen?.nama_dosen || 'Tidak ada dosen',
          total_mahasiswa_memilih: mk.krs.length,
          total_sks_diambil: mk.sks * mk.krs.length
        }))
        .sort((a, b) => b.total_mahasiswa_memilih - a.total_mahasiswa_memilih)
        .slice(0, 10);
      
      // Ambil semua dosen
      const allDosen = await this.prisma.dosen.findMany({
        include: {
          matakuliah: {
            include: {
              krs: {
                select: {
                  mahasiswa_id: true
                }
              }
            }
          }
        }
      });
      
      // Format top dosen
      const topDosen = allDosen
        .map(dosen => {
          const semuaKrs = dosen.matakuliah.flatMap(mk => mk.krs);
          const uniqueMahasiswa = new Set(semuaKrs.map(k => k.mahasiswa_id)).size;
          
          return {
            id_dosen: dosen.id,
            nama_dosen: dosen.nama_dosen,
            total_mahasiswa_memilih: uniqueMahasiswa,
            total_matakuliah_diampu: dosen.matakuliah.length,
            total_pengambilan_matakuliah: semuaKrs.length
          };
        })
        .filter(dosen => dosen.total_pengambilan_matakuliah > 0)
        .sort((a, b) => b.total_mahasiswa_memilih - a.total_mahasiswa_memilih)
        .slice(0, 10);
      
      console.log('=== ANALISIS SUCCESS ===');
      
      return {
        status: 'success',
        message: 'Analisis berhasil diambil',
        data: {
          topMatakuliah,
          topDosen
        }
      };
      
    } catch (error: any) {
      console.error('=== ANALISIS ERROR ===');
      console.error('Error:', error.message);
      return {
        status: 'false',
        message: `Gagal mengambil data analisis: ${error.message}`
      };
    }
  }

  async getAnalisisWithFilter(body: any): Promise<any> {
    try {
      console.log('=== ANALISIS WITH FILTER START ===');
      
      const tahun_ajaran = body.tahun_ajaran;
      const semester = body.semester ? parseInt(body.semester, 10) : undefined;
      const limit = body.limit ? parseInt(body.limit, 10) : 10;
      
      console.log('Parsed params:', { tahun_ajaran, semester, limit });
      
      const wherePenjadwalan: any = {};
      if (tahun_ajaran) wherePenjadwalan.tahun_ajaran = tahun_ajaran;
      if (semester) wherePenjadwalan.semester = semester;
      
      console.log('Where penjadwalan:', wherePenjadwalan);
      
      if (Object.keys(wherePenjadwalan).length === 0) {
        return await this.getAnalisis();
      }
      
      const penjadwalanList = await this.prisma.penjadwalan.findMany({
        where: wherePenjadwalan,
        select: {
          id_matakuliah: true
        }
      });
      
      if (penjadwalanList.length === 0) {
        return {
          status: 'success',
          message: 'Analisis berhasil diambil',
          data: {
            top_matakuliah: [],
            top_dosen: [],
            info: 'Tidak ada penjadwalan dengan filter tersebut'
          }
        };
      }
      
      const matakuliahIds = [...new Set(penjadwalanList.map(p => p.id_matakuliah))];
      console.log('Matakuliah IDs dengan penjadwalan:', matakuliahIds);
      
      const matakuliahWithKrs = await this.prisma.matakuliah.findMany({
        where: {
          id_matakuliah: {
            in: matakuliahIds
          }
        },
        include: {
          dosen: {
            select: {
              id: true,
              nama_dosen: true
            }
          },
          krs: {
            select: {
              mahasiswa_id: true
            }
          }
        }
      });
      
      const topMatakuliah = matakuliahWithKrs
        .map(mk => ({
          id_matakuliah: mk.id_matakuliah,
          nama_matakuliah: mk.nama_matakuliah,
          id_dosen: mk.id_dosen,
          nama_dosen: mk.dosen?.nama_dosen || 'Tidak ada dosen',
          total_mahasiswa_memilih: mk.krs.length,
          total_sks_diambil: mk.sks * mk.krs.length
        }))
        .sort((a, b) => b.total_mahasiswa_memilih - a.total_mahasiswa_memilih)
        .slice(0, limit);
      
      const dosenIds = [...new Set(matakuliahWithKrs.map(mk => mk.id_dosen))];
      const dosenList = await this.prisma.dosen.findMany({
        where: {
          id: {
            in: dosenIds
          }
        },
        include: {
          matakuliah: {
            where: {
              id_matakuliah: {
                in: matakuliahIds
              }
            },
            include: {
              krs: {
                select: {
                  mahasiswa_id: true
                }
              }
            }
          }
        }
      });
      
  
      const topDosen = dosenList
        .map(dosen => {
          const semuaKrs = dosen.matakuliah.flatMap(mk => mk.krs);
          const uniqueMahasiswa = new Set(semuaKrs.map(k => k.mahasiswa_id)).size;
          
          return {
            id_dosen: dosen.id,
            nama_dosen: dosen.nama_dosen,
            total_mahasiswa_memilih: uniqueMahasiswa,
            total_matakuliah_diampu: dosen.matakuliah.length,
            total_pengambilan_matakuliah: semuaKrs.length
          };
        })
        .filter(dosen => dosen.total_pengambilan_matakuliah > 0)
        .sort((a, b) => b.total_mahasiswa_memilih - a.total_mahasiswa_memilih)
        .slice(0, limit);
      
      console.log('=== ANALISIS WITH FILTER SUCCESS ===');
      
      return {
        status: 'success',
        message: 'Analisis berhasil diambil',
        data: {
          topMatakuliah,
          topDosen,
          filter_applied: {
            tahun_ajaran: tahun_ajaran || 'Semua',
            semester: semester || 'Semua',
            limit
          }
        }
      };
      
    } catch (error: any) {
      console.error('=== FILTER ANALISIS ERROR ===');
      console.error('Error:', error.message);
      console.error('Stack:', error.stack);
      return {
        status: 'false',
        message: `Analisis filter error: ${error.message}`
      };
    }
  }
}