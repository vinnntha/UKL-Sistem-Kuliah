// pilih-mahasiswa/pilih-mahasiswa.controller.ts
import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { PilihMahasiswaService } from './pilih-mahasiswa.service';
import { PilihMatakuliahDto } from './dto/pilih-mata-kuliah.dto';
import { JadwalMahasiswaDto } from './dto/jadwal-mahasiswa.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guards';
import { RolesGuard } from 'src/auth/roles.guards';
import { Roles } from 'src/auth/roles.decotator';

@Controller('api/mahasiswa')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PilihMahasiswaController {
  constructor(private readonly pilihMahasiswaService: PilihMahasiswaService) { }

  @Post('pilih-matakuliah')
  @Roles('mahasiswa')
  async pilihMatakuliah(@Body() pilihMatakuliahDto: PilihMatakuliahDto) {
    return await this.pilihMahasiswaService.pilihMatakuliah(pilihMatakuliahDto);
  }

  @Post('jadwal')
  @Roles('mahasiswa', 'admin')
  async lihatJadwal(@Body() jadwalMahasiswaDto: JadwalMahasiswaDto) {
    return await this.pilihMahasiswaService.lihatJadwal(jadwalMahasiswaDto);
  }

  @Get('jadwal/:mahasiswa_id')
  @Roles('mahasiswa', 'admin')
  async getJadwalByMahasiswaId(@Param('mahasiswa_id') mahasiswa_id: string) {
    return await this.pilihMahasiswaService.lihatJadwal({
      mahasiswa_id: parseInt(mahasiswa_id),
    });
  }

  @Get('available-matakuliah/:mahasiswa_id')
  @Roles('mahasiswa')
  async getAvailableMatakuliah(@Param('mahasiswa_id') mahasiswa_id: string) {
    return await this.pilihMahasiswaService.getAvailableMatakuliah(parseInt(mahasiswa_id));
  }

  @Delete('batalkan-pilihan/:mahasiswa_id/:matakuliah_id')
  @Roles('mahasiswa', 'admin')
  async batalkanPilihan(
    @Param('mahasiswa_id') mahasiswa_id: string,
    @Param('matakuliah_id') matakuliah_id: string,
  ) {
    return await this.pilihMahasiswaService.batalkanPilihan(
      parseInt(mahasiswa_id),
      parseInt(matakuliah_id),
    );
  }

  @Get('krs/:mahasiswa_id')
  @Roles('mahasiswa', 'admin')
  async getKRS(@Param('mahasiswa_id') mahasiswa_id: string) {
    return await this.pilihMahasiswaService.lihatJadwal({
      mahasiswa_id: parseInt(mahasiswa_id),
    });
  }
  // Tambahkan endpoint ini di controller
  @Get('debug/mahasiswa')
  @Roles('admin')
  async debugMahasiswa() {
    try {
      const semuaMahasiswa = await this.pilihMahasiswaService['prisma'].mahasiswa.findMany({
        select: {
          id: true,
          nim: true,
          nama_mahasiswa: true,
          jurusan: true,
          user: {
            select: {
              id: true,
              username: true,
              role: true
            }
          }
        },
        orderBy: { id: 'asc' }
      });

      return {
        status: 'success',
        message: 'Data mahasiswa untuk debugging',
        data: {
          total: semuaMahasiswa.length,
          mahasiswa: semuaMahasiswa
        }
      };
    } catch (error) {
      return {
        status: 'false',
        message: `Error: ${error.message}`
      };
    }
  }

  @Get('debug/matakuliah')
  @Roles('admin', 'mahasiswa')
  async debugMatakuliah() {
    try {
      const semuaMatakuliah = await this.pilihMahasiswaService['prisma'].matakuliah.findMany({
        select: {
          id_matakuliah: true,
          nama_matakuliah: true,
          sks: true,
          dosen: {
            select: {
              id: true,
              nama_dosen: true
            }
          },
          penjadwalan: {
            select: {
              id: true,
              jadwal: true,
              tahun_ajaran: true,
              semester: true
            }
          }
        },
        orderBy: { id_matakuliah: 'asc' }
      });

      return {
        status: 'success',
        message: 'Data matakuliah untuk debugging',
        data: {
          total: semuaMatakuliah.length,
          matakuliah: semuaMatakuliah
        }
      };
    } catch (error) {
      return {
        status: 'false',
        message: `Error: ${error.message}`
      };
    }
  }
}