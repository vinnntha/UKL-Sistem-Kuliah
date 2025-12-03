import { IsInt, IsNotEmpty } from 'class-validator';

export class JadwalMahasiswaDto {
  @IsInt()
  @IsNotEmpty()
  mahasiswa_id: number;
}