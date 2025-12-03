// mahasiswa/mahasiswa.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guards';
import { RolesGuard } from 'src/auth/roles.guards';
import { Roles } from 'src/auth/roles.decotator';
@Controller('api/mahasiswa')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MahasiswaController {
  constructor(private readonly mahasiswaService: MahasiswaService) {} // GUNAKAN MAHASISWA SERVICE

  @Post()
  @Roles('ADMIN')
  create(@Body() createMahasiswaDto: CreateMahasiswaDto) {
    return this.mahasiswaService.create(createMahasiswaDto);
  }

  @Get()
  @Roles('ADMIN')
  findAll() {
    return this.mahasiswaService.findAll();
  }

  @Get(':nim')
  @Roles('ADMIN', 'mahasiswa')
  findByNim(@Param('nim') nim: string) {
    return this.mahasiswaService.findByNim(nim);
  }

  @Get('id/:id')
  @Roles('ADMIN')
  findById(@Param('id') id: string) {
    return this.mahasiswaService.findById(+id);
  }

  @Get('jurusan/:jurusan')
  @Roles('ADMIN')
  findByJurusan(@Param('jurusan') jurusan: string) {
    return this.mahasiswaService.findByJurusan(jurusan);
  }

  @Patch(':nim')
  @Roles('ADMIN')
  updateByNim(@Param('nim') nim: string, @Body() updateMahasiswaDto: UpdateMahasiswaDto) {
    return this.mahasiswaService.updateByNim(nim, updateMahasiswaDto);
  }

  @Delete(':nim')
  @Roles('ADMIN')
  removeByNim(@Param('nim') nim: string) {
    return this.mahasiswaService.removeByNim(nim);
  }
}