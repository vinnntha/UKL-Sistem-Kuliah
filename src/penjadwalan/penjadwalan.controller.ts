// penjadwalan.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Put,
} from '@nestjs/common';
import { PenjadwalanService } from './penjadwalan.service';
import { CreatePenjadwalanDto } from './dto/create-penjadwalan.dto';
import { UpdatePenjadwalanDto } from './dto/update-penjadwalan.dto';
import { RolesGuard } from 'src/auth/roles.guards';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guards';
import { Roles } from 'src/auth/roles.decotator';

@Controller('api/penjadwalan')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PenjadwalanController {
  constructor(private readonly penjadwalanService: PenjadwalanService) {}

  // 5.a. Menambah Penjadwalan (ADMIN only)
  @Post()
  @Roles('ADMIN')
  create(@Body() createPenjadwalanDto: CreatePenjadwalanDto) {
    return this.penjadwalanService.create(createPenjadwalanDto);
  }

  // 5.c. Mengambil Seluruh Data Penjadwalan
  @Get()
  @Roles('ADMIN', 'mahasiswa') // Mahasiswa juga bisa melihat jadwal
  findAll() {
    return this.penjadwalanService.findAll();
  }

  // Filter penjadwalan
  @Get('filter')
  @Roles('ADMIN', 'mahasiswa')
  findByFilter(
    @Query('tahun_ajaran') tahun_ajaran?: string,
    @Query('semester') semester?: number,
    @Query('id_dosen') id_dosen?: number,
    @Query('id_matakuliah') id_matakuliah?: number,
  ) {
    return this.penjadwalanService.findByFilter({
      tahun_ajaran,
      semester: semester ? Number(semester) : undefined,
      id_dosen: id_dosen ? Number(id_dosen) : undefined,
      id_matakuliah: id_matakuliah ? Number(id_matakuliah) : undefined,
    });
  }

  // 5.b. Mengambil Data Penjadwalan (Detail by ID)
  @Get(':id')
  @Roles('ADMIN', 'mahasiswa')
  findOne(@Param('id') id: string) {
    return this.penjadwalanService.findOne(+id);
  }

  // 5.d. Mengubah Data Penjadwalan (ADMIN only)
  @Put(':id')
  @Roles('ADMIN')
  update(
    @Param('id') id: string,
    @Body() updatePenjadwalanDto: UpdatePenjadwalanDto,
  ) {
    return this.penjadwalanService.update(+id, updatePenjadwalanDto);
  }

  // 5.e. Menghapus Data Penjadwalan (ADMIN only)
  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.penjadwalanService.remove(+id);
  }
}