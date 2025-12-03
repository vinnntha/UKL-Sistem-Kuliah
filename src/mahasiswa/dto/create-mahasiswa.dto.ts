import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateMahasiswaDto {
  @IsString()
  @IsNotEmpty()
  nim: string;

  @IsString()
  @IsNotEmpty()
  nama_mahasiswa: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(['L', 'P'], { message: 'Jenis kelamin harus L atau P' })
  jenis_kelamin: string;

  @IsString()
  @IsNotEmpty()
  jurusan: string;
}