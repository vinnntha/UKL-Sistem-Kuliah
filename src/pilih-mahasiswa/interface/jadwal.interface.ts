export interface JadwalItem {
  id_matakuliah: number;
  nama_matakuliah: string;
  sks: number;
  jadwal: string;
  dosen: string;
  tahun_ajaran: string;
  semester: number | string;
}

export interface PilihMatakuliahResponse {
  status: string;
  message: string;
  data?: {
    mahasiswa_id: number;
    mahasiswa_nim: string;
    mahasiswa_nama: string;
    total_sks: number;
    total_matakuliah: number;
    matakuliah: Array<{
      id_matakuliah: number;
      nama_matakuliah: string;
      sks: number;
      jadwal: string;
      dosen: string;
    }>;
  };
}

export interface LihatJadwalResponse {
  status: string;
  message: string;
  data?: {
    mahasiswa_id: number;
    mahasiswa_nim: string;
    mahasiswa_nama: string;
    jurusan: string;
    total_sks: number;
    total_matakuliah: number;
    jadwal: JadwalItem[];
    jadwal_by_hari: Record<string, JadwalItem[]>;
    validasi: {
      minimal_sks: string;
      maksimal_sks: string;
      status: string;
    };
  };
}