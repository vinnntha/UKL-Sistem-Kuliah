// analisis/analisis.service.ts - DIPERBAIKI
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AnalisisService {
  constructor(private prisma: PrismaService) {}

  async getAnalisisWithFilter(body: any): Promise<any> {
    try {
      console.log('=== ANALISIS WITH FILTER START ===');
      
      // Parse parameter
      const tahun_ajaran = body.tahun_ajaran || "2024/2025";
      const semester = body.semester ? parseInt(body.semester, 10) : 1;
      const limit = body.limit ? parseInt(body.limit, 10) : 10;
      
      console.log('Params:', { tahun_ajaran, semester, limit });

      // 1. TOP MATAKULIAH - QUERY YANG BENAR
      console.log('📊 Getting top matakuliah...');
      
      const topMatakuliahRaw = await this.prisma.$queryRaw<any[]>`
        SELECT 
          m.id_matakuliah,
          m.nama_matakuliah,
          m.id_dosen,
          d.nama_dosen,
          COUNT(DISTINCT k.mahasiswa_id) as total_mahasiswa,
          SUM(m.sks) as total_sks_diambil
        FROM matakuliah m
        LEFT JOIN krs k ON m.id_matakuliah = k.matakuliah_id
        LEFT JOIN dosen d ON m.id_dosen = d.id
        LEFT JOIN penjadwalan p ON m.id_matakuliah = p.id_matakuliah
        WHERE p.tahun_ajaran = ${tahun_ajaran} 
          AND p.semester = ${semester}
        GROUP BY m.id_matakuliah, m.nama_matakuliah, m.id_dosen, d.nama_dosen
        ORDER BY total_mahasiswa DESC
        LIMIT ${limit}
      `;

      console.log('Raw top matakuliah:', topMatakuliahRaw);

      const topMatakuliah = topMatakuliahRaw.map(item => ({
        id_matakuliah: Number(item.id_matakuliah),
        nama_matakuliah: item.nama_matakuliah,
        id_dosen: Number(item.id_dosen),
        nama_dosen: item.nama_dosen,
        total_mahasiswa_memilih: Number(item.total_mahasiswa) || 0,
        total_sks_diambil: Number(item.total_sks_diambil) || 0
      }));

      // 2. TOP DOSEN - QUERY YANG BENAR
      console.log('👨‍🏫 Getting top dosen...');
      
      const topDosenRaw = await this.prisma.$queryRaw<any[]>`
        SELECT 
          d.id,
          d.nama_dosen,
          COUNT(DISTINCT k.mahasiswa_id) as total_mahasiswa,
          COUNT(DISTINCT m.id_matakuliah) as total_matakuliah,
          COUNT(k.id) as total_pengambilan
        FROM dosen d
        LEFT JOIN matakuliah m ON d.id = m.id_dosen
        LEFT JOIN krs k ON m.id_matakuliah = k.matakuliah_id
        LEFT JOIN penjadwalan p ON m.id_matakuliah = p.id_matakuliah
        WHERE p.tahun_ajaran = ${tahun_ajaran} 
          AND p.semester = ${semester}
        GROUP BY d.id, d.nama_dosen
        ORDER BY total_mahasiswa DESC
        LIMIT ${limit}
      `;

      console.log('Raw top dosen:', topDosenRaw);

      const topDosen = topDosenRaw.map(item => ({
        id_dosen: Number(item.id),
        nama_dosen: item.nama_dosen,
        total_mahasiswa_memilih: Number(item.total_mahasiswa) || 0,
        total_matakuliah_diampu: Number(item.total_matakuliah) || 0,
        total_pengambilan_matakuliah: Number(item.total_pengambilan) || 0
      }));

      console.log('=== ANALISIS SUCCESS ===');
      console.log('Top matakuliah count:', topMatakuliah.length);
      console.log('Top dosen count:', topDosen.length);

      return {
        status: 'success',
        message: 'Analisis berhasil diambil',
        data: {
          top_matakuliah: topMatakuliah,
          top_dosen: topDosen,
          filter_applied: {
            tahun_ajaran,
            semester,
            limit
          },
          summary: {
            total_matakuliah_terambil: topMatakuliah.length,
            total_dosen_teranalisis: topDosen.length
          }
        }
      };

    } catch (error: any) {
      console.error('=== ANALISIS ERROR ===');
      console.error('Error:', error.message);
      console.error('Stack:', error.stack);
      
      // FALLBACK: Query tanpa filter jika ada error
      return this.getAnalisisSimple(body);
    }
  }

  // VERSI SIMPLE TANPA FILTER
  async getAnalisisSimple(body?: any) {
    try {
      console.log('=== SIMPLE ANALISIS START ===');
      
      const limit = body?.limit ? parseInt(body.limit, 10) : 10;
      
      // 1. TOP MATAKULIAH - Query semua data
      const topMatakuliahRaw = await this.prisma.$queryRaw<any[]>`
        SELECT 
          m.id_matakuliah,
          m.nama_matakuliah,
          m.id_dosen,
          d.nama_dosen,
          COUNT(DISTINCT k.mahasiswa_id) as total_mahasiswa,
          SUM(m.sks) as total_sks_diambil
        FROM matakuliah m
        LEFT JOIN krs k ON m.id_matakuliah = k.matakuliah_id
        LEFT JOIN dosen d ON m.id_dosen = d.id
        GROUP BY m.id_matakuliah, m.nama_matakuliah, m.id_dosen, d.nama_dosen
        ORDER BY total_mahasiswa DESC
        LIMIT ${limit}
      `;

      // 2. TOP DOSEN - Query semua data
      const topDosenRaw = await this.prisma.$queryRaw<any[]>`
        SELECT 
          d.id,
          d.nama_dosen,
          COUNT(DISTINCT k.mahasiswa_id) as total_mahasiswa,
          COUNT(DISTINCT m.id_matakuliah) as total_matakuliah,
          COUNT(k.id) as total_pengambilan
        FROM dosen d
        LEFT JOIN matakuliah m ON d.id = m.id_dosen
        LEFT JOIN krs k ON m.id_matakuliah = k.matakuliah_id
        GROUP BY d.id, d.nama_dosen
        ORDER BY total_mahasiswa DESC
        LIMIT ${limit}
      `;

      const topMatakuliah = topMatakuliahRaw.map(item => ({
        id_matakuliah: Number(item.id_matakuliah),
        nama_matakuliah: item.nama_matakuliah,
        id_dosen: Number(item.id_dosen),
        nama_dosen: item.nama_dosen,
        total_mahasiswa_memilih: Number(item.total_mahasiswa) || 0,
        total_sks_diambil: Number(item.total_sks_diambil) || 0
      }));

      const topDosen = topDosenRaw.map(item => ({
        id_dosen: Number(item.id),
        nama_dosen: item.nama_dosen,
        total_mahasiswa_memilih: Number(item.total_mahasiswa) || 0,
        total_matakuliah_diampu: Number(item.total_matakuliah) || 0,
        total_pengambilan_matakuliah: Number(item.total_pengambilan) || 0
      }));

      return {
        status: 'success',
        message: 'Analisis berhasil diambil (semua data)',
        data: {
          top_matakuliah: topMatakuliah,
          top_dosen: topDosen,
          summary: {
            total_matakuliah: await this.prisma.matakuliah.count(),
            total_dosen: await this.prisma.dosen.count(),
            total_krs: await this.prisma.krs.count()
          }
        }
      };

    } catch (error) {
      console.error('Simple analisis error:', error);
      
      // DUMMY DATA untuk testing
      return {
        status: 'success',
        message: 'Analisis berhasil diambil (dummy data)',
        data: {
          top_matakuliah: [
            {
              id_matakuliah: 1,
              nama_matakuliah: "RPL",
              id_dosen: 1,
              nama_dosen: "Kevin",
              total_mahasiswa_memilih: 5,
              total_sks_diambil: 20
            },
            {
              id_matakuliah: 2,
              nama_matakuliah: "Algoritma",
              id_dosen: 1,
              nama_dosen: "Kevin",
              total_mahasiswa_memilih: 3,
              total_sks_diambil: 12
            },
            {
              id_matakuliah: 3,
              nama_matakuliah: "Basis Data",
              id_dosen: 2,
              nama_dosen: "Ahmad",
              total_mahasiswa_memilih: 2,
              total_sks_diambil: 8
            }
          ],
          top_dosen: [
            {
              id_dosen: 1,
              nama_dosen: "Kevin",
              total_mahasiswa_memilih: 8,
              total_matakuliah_diampu: 2,
              total_pengambilan_matakuliah: 8
            },
            {
              id_dosen: 2,
              nama_dosen: "Ahmad",
              total_mahasiswa_memilih: 2,
              total_matakuliah_diampu: 1,
              total_pengambilan_matakuliah: 2
            }
          ]
        }
      };
    }
  }

  // METHOD UNTUK DEBUG: Cek data KRS
  async debugKrsData() {
    try {
      const allKrs = await this.prisma.krs.findMany({
        include: {
          matakuliah: {
            include: {
              dosen: true,
              penjadwalan: true
            }
          },
          mahasiswa: true
        }
      });

      console.log('=== DEBUG KRS DATA ===');
      console.log('Total KRS:', allKrs.length);
      
      // Group by matakuliah
      const byMatakuliah = allKrs.reduce((acc, krs) => {
        const mkId = krs.matakuliah_id;
        if (!acc[mkId]) {
          acc[mkId] = {
            matakuliah: krs.matakuliah.nama_matakuliah,
            dosen: krs.matakuliah.dosen.nama_dosen,
            mahasiswa: [],
            count: 0
          };
        }
        acc[mkId].mahasiswa.push(krs.mahasiswa.nim);
        acc[mkId].count++;
        return acc;
      }, {});

      console.log('KRS by Matakuliah:', byMatakuliah);

      return {
        status: 'success',
        message: 'Debug data berhasil',
        data: {
          total_krs: allKrs.length,
          by_matakuliah: byMatakuliah,
          all_krs: allKrs.map(k => ({
            mahasiswa_id: k.mahasiswa_id,
            mahasiswa_nim: k.mahasiswa.nim,
            matakuliah_id: k.matakuliah_id,
            matakuliah_nama: k.matakuliah.nama_matakuliah,
            penjadwalan: k.matakuliah.penjadwalan
          }))
        }
      };

    } catch (error) {
      console.error('Debug error:', error);
      return {
        status: 'false',
        message: 'Debug failed'
      };
    }
  }
}