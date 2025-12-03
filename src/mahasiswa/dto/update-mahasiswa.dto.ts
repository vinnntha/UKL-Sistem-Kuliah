import { IsString, IsOptional, IsEnum } from 'class-validator';

export class UpdateMahasiswaDto {
  @IsString()
  @IsOptional()
  nama_mahasiswa?: string;

  @IsString()
  @IsOptional()
  @IsEnum(['L', 'P'], { message: 'Jenis kelamin harus L atau P' })
  jenis_kelamin?: string;

  @IsString()
  @IsOptional()
  jurusan?: string;
}