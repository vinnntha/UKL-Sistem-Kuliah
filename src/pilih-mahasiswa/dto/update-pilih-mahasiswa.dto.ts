import { PartialType } from '@nestjs/mapped-types';
import { CreatePilihMahasiswaDto } from './create-pilih-mahasiswa.dto';

export class UpdatePilihMahasiswaDto extends PartialType(CreatePilihMahasiswaDto) {}
