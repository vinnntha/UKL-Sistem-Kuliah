// mahasiswa/mahasiswa.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
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
  @Roles('admin')
  create(@Body() createMahasiswaDto: CreateMahasiswaDto) {
    return this.mahasiswaService.create(createMahasiswaDto);
  }

  @Get()
  @Roles('admin')
  findAll() {
    return this.mahasiswaService.findAll();
  }

  @Get(':nim')
  @Roles('admin', 'mahasiswa')
  findByNim(@Param('nim') nim: string) {
    return this.mahasiswaService.findByNim(nim);
  }

  @Get('id/:id')
  @Roles('admin')
  findById(@Param('id') id: string) {
    return this.mahasiswaService.findById(+id);
  }

  @Get('jurusan/:jurusan')
  @Roles('admin')
  findByJurusan(@Param('jurusan') jurusan: string) {
    return this.mahasiswaService.findByJurusan(jurusan);
  }

  @Put(':nim')
  @Roles('admin')
  updateByNim(@Param('nim') nim: string, @Body() updateMahasiswaDto: UpdateMahasiswaDto) {
    return this.mahasiswaService.updateByNim(nim, updateMahasiswaDto);
  }

  @Delete(':nim')
  @Roles('admin')
  removeByNim(@Param('nim') nim: string) {
    return this.mahasiswaService.removeByNim(nim);
  }
}