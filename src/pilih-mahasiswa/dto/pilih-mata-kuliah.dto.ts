import { IsArray, IsInt, IsNotEmpty, ArrayMinSize } from 'class-validator';

export class PilihMatakuliahDto {
  @IsInt()
  @IsNotEmpty()
  mahasiswa_id: number;

  @IsArray()
  @ArrayMinSize(1, { message: 'Minimal pilih 1 matakuliah' })
  @IsInt({ each: true })
  matakuliah_ids: number[];
}