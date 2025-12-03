// mata-kuliah/mata-kuliah.controller.ts - DIPERBAIKI
import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Query, Request } from '@nestjs/common';
import { MataKuliahService } from './mata-kuliah.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guards';
import { RolesGuard } from 'src/auth/roles.guards';
import { Roles } from 'src/auth/roles.decotator';

@Controller('api/matakuliah')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MataKuliahController {
  constructor(private readonly matakuliahService: MataKuliahService) {}

  @Post()
  @Roles('admin')
  async create(@Body() body: any) {
    console.log('📨 POST /matakuliah', body);
    // PERBAIKAN: Gunakan createMatakuliah, bukan create
    return await this.matakuliahService.createMatakuliah(body);
  }

  @Get()
  @Roles('admin', 'mahasiswa')
  async findAll(
    @Query('nama') nama?: string,
    @Query('id_dosen') id_dosen?: string,
    @Query('sks') sks?: string
  ) {
    console.log('📨 GET /matakuliah', { nama, id_dosen, sks });
    
    // Build filters object
    const filters: any = {};
    if (nama) filters.nama = nama;
    if (id_dosen) filters.id_dosen = parseInt(id_dosen);
    if (sks) filters.sks = parseInt(sks);
    
    // PERBAIKAN: Gunakan findAll dengan filters
    return await this.matakuliahService.findAll(filters);
  }

  @Get(':id')
  @Roles('admin', 'mahasiswa')
  async findOne(@Param('id') id: string) {
    console.log(`📨 GET /matakuliah/${id}`);
    // PERBAIKAN: Gunakan findOne, bukan findOneById
    return await this.matakuliahService.findOne(+id);
  }

  @Put(':id')
  @Roles('admin')
  async update(@Param('id') id: string, @Body() body: any) {
    console.log(`📨 PUT /matakuliah/${id}`, body);
    // PERBAIKAN: Gunakan update, bukan updateById
    return await this.matakuliahService.update(+id, body);
  }

  @Delete(':id')
  @Roles('admin')
  async remove(@Param('id') id: string) {
    console.log(`📨 DELETE /matakuliah/${id}`);
    // PERBAIKAN: Gunakan remove, bukan removeById
    return await this.matakuliahService.remove(+id);
  }

  @Get('check/duplicate')
  @Roles('admin')
  async checkDuplicate(
    @Query('nama_matakuliah') nama_matakuliah: string,
    @Query('id_dosen') id_dosen: string,
    @Query('exclude_id') exclude_id?: string
  ) {
    console.log(`📨 GET /matakuliah/check/duplicate`, { nama_matakuliah, id_dosen, exclude_id });
    
    if (!nama_matakuliah || !id_dosen) {
      return {
        status: 'false',
        message: 'Parameter nama_matakuliah dan id_dosen diperlukan'
      };
    }

    const result = await this.matakuliahService.checkDuplicate(
      nama_matakuliah,
      parseInt(id_dosen),
      exclude_id ? parseInt(exclude_id) : undefined
    );

    if (result.exists) {
      return {
        status: 'success',
        message: 'Matakuliah dengan kombinasi ini sudah ada',
        data: {
          is_duplicate: true,
          existing_matakuliah: result.data
        }
      };
    }

    return {
      status: 'success',
      message: 'Matakuliah dengan kombinasi ini belum ada',
      data: {
        is_duplicate: false
      }
    };
  }

  @Get('search/by-dosen')
  @Roles('admin', 'mahasiswa')
  async findByNamaAndDosen(
    @Query('nama') nama: string,
    @Query('id_dosen') id_dosen: string
  ) {
    console.log(`📨 GET /matakuliah/search/by-dosen`, { nama, id_dosen });
    
    if (!nama || !id_dosen) {
      return {
        status: 'false',
        message: 'Parameter nama dan id_dosen diperlukan'
      };
    }

    return await this.matakuliahService.findByNamaAndDosen(
      nama,
      parseInt(id_dosen)
    );
  }
}