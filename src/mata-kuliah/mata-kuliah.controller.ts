import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { MataKuliahService } from './mata-kuliah.service';
import { CreateMataKuliahDto } from './dto/create-mata-kuliah.dto';
import { UpdateMataKuliahDto } from './dto/update-mata-kuliah.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guards';
import { RolesGuard } from 'src/auth/roles.guards';
import { Roles } from 'src/auth/roles.decotator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('api/matakuliah')
export class MataKuliahController {
  constructor(private readonly matakuliahService: MataKuliahService) {}

  @Post()
  async create(@Body() dto: CreateMataKuliahDto) {
    const mk = await this.matakuliahService.create(dto);

    return {
      status: 'success',
      message: 'Matakuliah added successfully',
      data: {
        id_matakuliah: mk.id_matakuliah,
        nama_matakuliah: mk.nama_matakuliah,
        id_dosen: mk.id_dosen,
        sks: mk.sks,
      },
    };
  }

  @Get()
  async findAll() {
    const list = await this.matakuliahService.findAll();

    return {
      status: 'success',
      message: 'Data matakuliah retrieved successfully',
      data: list.map((mk) => ({
        id_matakuliah: mk.id_matakuliah,
        nama_matakuliah: mk.nama_matakuliah,
        id_dosen: mk.id_dosen,
        sks: mk.sks,
      })),
    };
  }

  @Get(':id_matakuliah')
  async findOne(@Param('id_matakuliah') idParam: string) {
    const id = parseInt(idParam, 10);
    const mk = await this.matakuliahService.findOneById(id);

    if (!mk) {
      throw new NotFoundException({
        status: 'error',
        message: 'Matakuliah not found',
      });
    }

    return {
      status: 'success',
      message: 'Matakuliah retrieved successfully',
      data: {
        id_matakuliah: mk.id_matakuliah,
        nama_matakuliah: mk.nama_matakuliah,
        id_dosen: mk.id_dosen,
        sks: mk.sks,
      },
    };
  }

  @Put(':id_matakuliah')
  async update(
    @Param('id_matakuliah') idParam: string,
    @Body() dto: UpdateMataKuliahDto,
  ) {
    const id = parseInt(idParam, 10);
    const mk = await this.matakuliahService.updateById(id, dto);

    return {
      status: 'success',
      message: 'Matakuliah updated successfully',
      data: {
        id_matakuliah: mk.id_matakuliah,
        nama_matakuliah: mk.nama_matakuliah,
        id_dosen: mk.id_dosen,
        sks: mk.sks,
      },
    };
  }

  @Delete(':id_matakuliah')
  async remove(@Param('id_matakuliah') idParam: string) {
    const id = parseInt(idParam, 10);
    await this.matakuliahService.removeById(id);

    return {
      status: 'success',
      message: 'Matakuliah deleted successfully',
    };
  }
}