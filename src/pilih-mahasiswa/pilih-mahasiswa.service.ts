import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PilihMatakuliahDto } from './dto/pilih-mata-kuliah.dto';
import { JadwalMahasiswaDto } from './dto/jadwal-mahasiswa.dto';
import { 
  JadwalItem, 
  PilihMatakuliahResponse, 
  LihatJadwalResponse 
} from './interface/jadwal.interface';

// Define interface untuk penjadwalan
interface Penjadwalan {
  id: number;
  id_matakuliah: number;
  id_dosen: number;
  jadwal: string;
  tahun_ajaran: string;
  semester: number;
}

interface Matakuliah {
  id_matakuliah: number;
  nama_matakuliah: string;
  sks: number;
  id_dosen: number;
  penjadwalan?: Penjadwalan[];
  dosen?: { nama_dosen: string };
}

interface PenjadwalanWithMatakuliah extends Penjadwalan {
  matakuliah: Matakuliah;
}

@Injectable()
export class PilihMahasiswaService {
  constructor(private prisma: PrismaService) {}

  private parseJadwal(jadwal: string): { hari: string; jamMulai: string; jamSelesai: string } {
    try {
      const [hari, waktu] = jadwal.split(' ');
      const [jamMulai, jamSelesai] = waktu.split('-');
      return { hari, jamMulai, jamSelesai };
    } catch (error) {
      console.error('Error parsing jadwal:', jadwal);
      return { hari: '', jamMulai: '', jamSelesai: '' };
    }
  }

  private cekBentrokJadwal(jadwal1: string, jadwal2: string): boolean {
    try {
      if (!jadwal1 || !jadwal2) return false;
      
      const parsed1 = this.parseJadwal(jadwal1);
      const parsed2 = this.parseJadwal(jadwal2);
      
      if (!parsed1.hari || !parsed2.hari) return false;
      
      if (parsed1.hari !== parsed2.hari) return false;
      
      const waktuKeMenit = (jam: string): number => {
        const [jamStr, menitStr] = jam.split(':');
        return parseInt(jamStr || '0') * 60 + parseInt(menitStr || '0');
      };
      
      const mulai1 = waktuKeMenit(parsed1.jamMulai);
      const selesai1 = waktuKeMenit(parsed1.jamSelesai);
      const mulai2 = waktuKeMenit(parsed2.jamMulai);
      const selesai2 = waktuKeMenit(parsed2.jamSelesai);
      
      return (mulai1 < selesai2 && selesai1 > mulai2);
    } catch (error) {
      console.error('Error cek bentrok jadwal:', error);
      return false;
    }
  }

  async pilihMatakuliah(pilihMatakuliahDto: PilihMatakuliahDto): Promise<PilihMatakuliahResponse | any> {
    try {
      const { mahasiswa_id, matakuliah_ids } = pilihMatakuliahDto;

      console.log('=== PILIH MATKUL START ===');
      console.log('Mahasiswa ID:', mahasiswa_id);
      console.log('Matakuliah IDs:', matakuliah_ids);

      console.log('🔍 Mencari mahasiswa dengan ID:', mahasiswa_id);
      const mahasiswa = await this.prisma.mahasiswa.findUnique({
        where: { id: mahasiswa_id },
      });

      console.log('Hasil pencarian mahasiswa:', mahasiswa);

      if (!mahasiswa) {
        console.log('Mahasiswa TIDAK DITEMUKAN');
        
        const semuaMahasiswa = await this.prisma.mahasiswa.findMany({
          select: { id: true, nim: true, nama_mahasiswa: true }
        });
        console.log('Semua mahasiswa yang ada:', semuaMahasiswa);
        
        return {
          status: 'false',
          message: `Mahasiswa dengan ID ${mahasiswa_id} tidak ditemukan. Data mahasiswa yang tersedia: ${JSON.stringify(semuaMahasiswa)}`,
        };
      }

      console.log('✅ Mahasiswa ditemukan:', mahasiswa.nama_mahasiswa);
      console.log('=== PILIH MATKUL LANJUT ===');

      const matakuliahList = await this.prisma.matakuliah.findMany({
        where: {
          id_matakuliah: { in: matakuliah_ids },
        },
        include: {
          penjadwalan: {
            where: {
              tahun_ajaran: "2024/2025",
              semester: 1,
            },
          },
        },
      });

      console.log('Matakuliah ditemukan:', matakuliahList.length);

      if (matakuliahList.length !== matakuliah_ids.length) {
        const foundIds = matakuliahList.map(m => m.id_matakuliah);
        const notFound = matakuliah_ids.filter(id => !foundIds.includes(id));
        return {
          status: 'false',
          message: `Beberapa matakuliah tidak ditemukan: ${notFound.join(', ')}`,
        };
      }

      const semuaPenjadwalan: PenjadwalanWithMatakuliah[] = [];
      
      matakuliahList.forEach(matakuliah => {
        if (matakuliah.penjadwalan && matakuliah.penjadwalan.length > 0) {
          matakuliah.penjadwalan.forEach((penjadwalan: any) => {
            semuaPenjadwalan.push({
              ...penjadwalan,
              matakuliah: {
                id_matakuliah: matakuliah.id_matakuliah,
                nama_matakuliah: matakuliah.nama_matakuliah,
                sks: matakuliah.sks,
                id_dosen: matakuliah.id_dosen,
              },
            });
          });
        }
      });

      console.log('Semua penjadwalan:', semuaPenjadwalan.length);

      let totalSKS = 0;
      matakuliahList.forEach((matakuliah: any) => {
        totalSKS += matakuliah.sks;
      });

      console.log('Total SKS:', totalSKS);

      // 5. Validasi total SKS (15-23 SKS)
      if (totalSKS < 15) {
        return {
          status: 'false',
          message: `Total SKS kurang dari 15. Total SKS saat ini: ${totalSKS}. Silakan tambah matakuliah.`,
          data: { total_sks: totalSKS }
        };
      }

      if (totalSKS > 23) {
        return {
          status: 'false',
          message: `Total SKS melebihi 23. Total SKS saat ini: ${totalSKS}. Silakan kurangi matakuliah.`,
          data: { total_sks: totalSKS }
        };
      }

      // 6. Cek jadwal bentrok
      const jadwalConflict: Array<{
        matakuliah1: string;
        matakuliah2: string;
        jadwal1: string;
        jadwal2: string;
      }> = [];
      
      for (let i = 0; i < semuaPenjadwalan.length; i++) {
        for (let j = i + 1; j < semuaPenjadwalan.length; j++) {
          if (this.cekBentrokJadwal(semuaPenjadwalan[i].jadwal, semuaPenjadwalan[j].jadwal)) {
            jadwalConflict.push({
              matakuliah1: semuaPenjadwalan[i].matakuliah.nama_matakuliah,
              matakuliah2: semuaPenjadwalan[j].matakuliah.nama_matakuliah,
              jadwal1: semuaPenjadwalan[i].jadwal,
              jadwal2: semuaPenjadwalan[j].jadwal,
            });
          }
        }
      }

      console.log('Konflik jadwal:', jadwalConflict.length);

      if (jadwalConflict.length > 0) {
        return {
          status: 'false',
          message: 'Jadwal bentrok',
          data: {
            conflicts: jadwalConflict,
            total_sks: totalSKS
          }
        };
      }

      // 7. Cek apakah sudah memilih sebelumnya, hapus yang lama
      await this.prisma.krs.deleteMany({
        where: { mahasiswa_id: mahasiswa_id },
      });

      // 8. Simpan pilihan matakuliah ke tabel Krs
      const krsData = matakuliah_ids.map((matakuliahId) => ({
        mahasiswa_id: mahasiswa_id,
        matakuliah_id: matakuliahId,
      }));

      console.log('Data KRS untuk disimpan:', krsData);

      await this.prisma.krs.createMany({
        data: krsData,
      });

      // 9. Ambil data lengkap untuk response
      const krsLengkap = await this.prisma.krs.findMany({
        where: { mahasiswa_id: mahasiswa_id },
        include: {
          matakuliah: {
            include: {
              penjadwalan: true,
              dosen: true,
            },
          },
        },
      });

      console.log('KRS lengkap ditemukan:', krsLengkap.length);

      // Format response
      const matakuliahDipilih = krsLengkap.map((krs: any) => {
        const jadwal = krs.matakuliah.penjadwalan.length > 0 
          ? krs.matakuliah.penjadwalan[0].jadwal 
          : 'Jadwal belum ditentukan';
        
        return {
          id_matakuliah: krs.matakuliah.id_matakuliah,
          nama_matakuliah: krs.matakuliah.nama_matakuliah,
          sks: krs.matakuliah.sks,
          jadwal: jadwal,
          dosen: krs.matakuliah.dosen?.nama_dosen || 'Belum ada dosen',
        };
      });

      console.log('=== PILIH MATKUL SUCCESS ===');

      return {
        status: 'success',
        message: 'Matakuliah berhasil dipilih',
        data: {
          mahasiswa_id,
          mahasiswa_nim: mahasiswa.nim,
          mahasiswa_nama: mahasiswa.nama_mahasiswa,
          total_sks: totalSKS,
          total_matakuliah: matakuliah_ids.length,
          matakuliah: matakuliahDipilih,
        },
      };
    } catch (error: any) {
      console.error('=== PILIH MATKUL ERROR ===');
      console.error('Error pilih matakuliah:', error);
      console.error('=== PILIH MATKUL ERROR END ===');
      
      return {
        status: 'false',
        message: `Gagal memilih matakuliah: ${error.message}`,
      };
    }
  }

  // 6. Mahasiswa melihat jadwal
  async lihatJadwal(jadwalMahasiswaDto: JadwalMahasiswaDto): Promise<LihatJadwalResponse | any> {
    try {
      const { mahasiswa_id } = jadwalMahasiswaDto;

      console.log('Lihat jadwal untuk mahasiswa ID:', mahasiswa_id);

      // Validasi mahasiswa exist
      const mahasiswa = await this.prisma.mahasiswa.findUnique({
        where: { id: mahasiswa_id },
      });

      if (!mahasiswa) {
        return {
          status: 'false',
          message: 'Mahasiswa tidak ditemukan',
        };
      }

      // Ambil KRS
      const krsList = await this.prisma.krs.findMany({
        where: { mahasiswa_id: mahasiswa_id },
        include: {
          matakuliah: {
            include: {
              penjadwalan: true,
              dosen: true,
            },
          },
        },
      });

      console.log('KRS ditemukan:', krsList.length);

      if (krsList.length === 0) {
        return {
          status: 'false',
          message: 'Belum ada matakuliah terpilih / jadwal',
        };
      }

      // Format jadwal
      const jadwalFormatted: JadwalItem[] = [];
      const jadwalByHari: Record<string, JadwalItem[]> = {};

      for (const krs of krsList) {
        const matakuliah = krs.matakuliah;

        if (matakuliah.penjadwalan && matakuliah.penjadwalan.length > 0) {
          matakuliah.penjadwalan.forEach((penjadwalan: any) => {
            const item: JadwalItem = {
              id_matakuliah: matakuliah.id_matakuliah,
              nama_matakuliah: matakuliah.nama_matakuliah,
              sks: matakuliah.sks,
              jadwal: penjadwalan.jadwal,
              dosen: matakuliah.dosen?.nama_dosen || 'Belum ada dosen',
              tahun_ajaran: penjadwalan.tahun_ajaran,
              semester: penjadwalan.semester,
            };
            
            jadwalFormatted.push(item);
            
            const hari = penjadwalan.jadwal.split(' ')[0];
            if (!jadwalByHari[hari]) {
              jadwalByHari[hari] = [];
            }
            jadwalByHari[hari].push(item);
          });
        } else {
          const item: JadwalItem = {
            id_matakuliah: matakuliah.id_matakuliah,
            nama_matakuliah: matakuliah.nama_matakuliah,
            sks: matakuliah.sks,
            jadwal: 'Jadwal belum ditentukan',
            dosen: matakuliah.dosen?.nama_dosen || 'Belum ada dosen',
            tahun_ajaran: '-',
            semester: '-',
          };
          
          jadwalFormatted.push(item);
        }
      }

      // Urutkan jadwal
      jadwalFormatted.sort((a, b) => {
        if (a.jadwal === 'Jadwal belum ditentukan') return 1;
        if (b.jadwal === 'Jadwal belum ditentukan') return -1;
        
        const hariOrder = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
        const hariA = a.jadwal.split(' ')[0];
        const hariB = b.jadwal.split(' ')[0];
        
        const indexA = hariOrder.indexOf(hariA);
        const indexB = hariOrder.indexOf(hariB);
        
        if (indexA !== indexB) return indexA - indexB;
        
        const waktuA = a.jadwal.split(' ')[1]?.split('-')[0] || '00:00';
        const waktuB = b.jadwal.split(' ')[1]?.split('-')[0] || '00:00';
        return waktuA.localeCompare(waktuB);
      });

      // Hitung total SKS
      const totalSKS = jadwalFormatted.reduce((sum, item) => sum + item.sks, 0);

      return {
        status: 'success',
        message: 'Jadwal berhasil diambil',
        data: {
          mahasiswa_id,
          mahasiswa_nim: mahasiswa.nim,
          mahasiswa_nama: mahasiswa.nama_mahasiswa,
          jurusan: mahasiswa.jurusan,
          total_sks: totalSKS,
          total_matakuliah: krsList.length,
          jadwal: jadwalFormatted,
          jadwal_by_hari: jadwalByHari,
          validasi: {
            minimal_sks: totalSKS >= 15 ? 'Terpenuhi' : 'Tidak terpenuhi',
            maksimal_sks: totalSKS <= 23 ? 'Terpenuhi' : 'Tidak terpenuhi',
            status: totalSKS >= 15 && totalSKS <= 23 ? 'Valid' : 'Tidak Valid',
          },
        },
      };
    } catch (error: any) {
      console.error('Error lihat jadwal:', error);
      return {
        status: 'false',
        message: `Gagal mengambil jadwal: ${error.message}`,
      };
    }
  }

  // Get available matakuliah untuk dipilih
  async getAvailableMatakuliah(mahasiswa_id: number): Promise<any> {
    try {
      const mahasiswa = await this.prisma.mahasiswa.findUnique({
        where: { id: mahasiswa_id },
      });

      if (!mahasiswa) {
        return {
          status: 'false',
          message: 'Mahasiswa tidak ditemukan',
        };
      }

      const tahunAjaranAktif = "2024/2025";
      const semesterAktif = 1;

      const semuaMatakuliah = await this.prisma.matakuliah.findMany({
        include: {
          penjadwalan: {
            where: {
              tahun_ajaran: tahunAjaranAktif,
              semester: semesterAktif,
            },
          },
          dosen: true,
          _count: {
            select: {
              krs: true,
            },
          },
        },
        orderBy: {
          nama_matakuliah: 'asc',
        },
      });

      const sudahDipilih = await this.prisma.krs.findMany({
        where: { mahasiswa_id: mahasiswa_id },
        select: { matakuliah_id: true },
      });

      const idSudahDipilih = sudahDipilih.map((krs: any) => krs.matakuliah_id);

      const matakuliahTersedia = semuaMatakuliah.map((matakuliah: any) => {
        const jadwal = matakuliah.penjadwalan.length > 0 
          ? matakuliah.penjadwalan[0].jadwal 
          : 'Jadwal belum ditentukan';
        
        return {
          id_matakuliah: matakuliah.id_matakuliah,
          nama_matakuliah: matakuliah.nama_matakuliah,
          sks: matakuliah.sks,
          jadwal: jadwal,
          dosen: matakuliah.dosen?.nama_dosen || 'Belum ada dosen',
          kuota_terisi: matakuliah._count.krs,
          sudah_dipilih: idSudahDipilih.includes(matakuliah.id_matakuliah),
          tahun_ajaran: tahunAjaranAktif,
          semester: semesterAktif,
        };
      });

      const totalSKSdipilih = semuaMatakuliah
        .filter((m: any) => idSudahDipilih.includes(m.id_matakuliah))
        .reduce((total: number, m: any) => total + m.sks, 0);

      return {
        status: 'success',
        message: 'Data matakuliah tersedia berhasil diambil',
        data: {
          mahasiswa_id,
          mahasiswa_nim: mahasiswa.nim,
          mahasiswa_nama: mahasiswa.nama_mahasiswa,
          tahun_ajaran: tahunAjaranAktif,
          semester: semesterAktif,
          total_sks_dipilih: totalSKSdipilih,
          total_matakuliah_dipilih: idSudahDipilih.length,
          batas_minimal_sks: 15,
          batas_maksimal_sks: 23,
          sisa_kuota_sks: Math.max(0, 23 - totalSKSdipilih),
          matakuliah_tersedia: matakuliahTersedia,
          matakuliah_sudah_dipilih: matakuliahTersedia.filter((m: any) => m.sudah_dipilih),
        },
      };
    } catch (error: any) {
      console.error('Error get available matakuliah:', error);
      return {
        status: 'false',
        message: `Gagal mengambil data matakuliah tersedia: ${error.message}`,
      };
    }
  }

  // Batalkan pilihan matakuliah
  async batalkanPilihan(mahasiswa_id: number, matakuliah_id: number): Promise<any> {
    try {
      const krsExist = await this.prisma.krs.findFirst({
        where: {
          mahasiswa_id: mahasiswa_id,
          matakuliah_id: matakuliah_id,
        },
      });

      if (!krsExist) {
        return {
          status: 'false',
          message: 'Pilihan matakuliah tidak ditemukan',
        };
      }

      await this.prisma.krs.delete({
        where: {
          id: krsExist.id,
        },
      });

      return {
        status: 'success',
        message: 'Pilihan matakuliah berhasil dibatalkan',
      };
    } catch (error: any) {
      console.error('Error batalkan pilihan:', error);
      return {
        status: 'false',
        message: 'Gagal membatalkan pilihan matakuliah',
      };
    }
  }
}