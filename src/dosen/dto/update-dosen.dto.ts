import { IsString, IsOptional, IsEnum } from 'class-validator';

export class UpdateDosenDto {
  @IsString()
  @IsOptional()
  nama_dosen?: string;

  @IsString()
  @IsOptional()
  @IsEnum(['L', 'P'], { message: 'Jenis kelamin harus L atau P' })
  jenis_kelamin?: string;

  @IsString()
  @IsOptional()
  alamat?: string;
}