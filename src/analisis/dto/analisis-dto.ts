import { IsString, IsInt, IsOptional, Min, Max } from 'class-validator';

export class AnalisisDto {
  @IsString()
  @IsOptional()
  tahun_ajaran?: string;

  @IsInt()
  @Min(1)
  @Max(2)
  @IsOptional()
  semester?: number;

  @IsInt()
  @Min(1)
  @Max(100)
  @IsOptional()
  limit?: number;
}