import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { DosenService } from './dosen.service';
import { CreateDosenDto } from './dto/create-dosen.dto';
import { UpdateDosenDto } from './dto/update-dosen.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guards';
import { RolesGuard } from 'src/auth/roles.guards';
import { Roles } from 'src/auth/roles.decotator';

@Controller('api/dosen')
@UseGuards(JwtAuthGuard, RolesGuard)
export class DosenController {
  constructor(private readonly dosenService: DosenService) {}

  @Post()
  @Roles('admin')
  create(@Body() createDosenDto: CreateDosenDto) {
    return this.dosenService.create(createDosenDto);
  }

  @Get()
  @Roles('admin')
  findAll() {
    return this.dosenService.findAll();
  }

  @Get(':id')
  @Roles('admin')
  findOneByid(@Param('id') id: string) {
    return this.dosenService.findOneByid(+id);
  }

  @Get('nidn/:nidn')
  @Roles('admin')
  findByNidn(@Param('nidn') nidn: string) {
    return this.dosenService.findByNidn(+nidn);
  }

  @Put(':id')
  @Roles('admin')
  updateByid(@Param('id') id: string, @Body() updateDosenDto: UpdateDosenDto) {
    return this.dosenService.updateByid(+id, updateDosenDto);
  }

  @Delete(':id')
  @Roles('admin')
  removeByid(@Param('id') id: string) {
    return this.dosenService.removeByid(+id);
  }
}