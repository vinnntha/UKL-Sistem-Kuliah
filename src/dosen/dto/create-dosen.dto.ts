import { IsInt, IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateDosenDto {
  @IsInt()
  @IsNotEmpty()
  nidn: number;

  @IsString()
  @IsNotEmpty()
  nama_dosen: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['L', 'P'], { message: 'Jenis kelamin harus L atau P' })
  jenis_kelamin: string;

  @IsString()
  @IsNotEmpty()
  alamat: string;
}






















     