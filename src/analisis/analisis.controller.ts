// analisis.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { AnalisisService } from './analisis.service';

@Controller('api/analisis')
export class AnalisisController {
  constructor(private readonly analisisService: AnalisisService) { }

  @Post('top-matakuliah-dosen')
  async getTopMatakuliahDosen(@Body() body: any) {
    try {
      const parsedBody = {
        tahun_ajaran: body.tahun_ajaran,
        semester: body.semester ? Number(body.semester) : undefined,
        limit: body.limit ? Number(body.limit) : 10
      };

      console.log('Parsed body:', parsedBody);

      if (parsedBody.semester && isNaN(parsedBody.semester)) {
        return {
          status: 'false',
          message: 'Semester harus berupa angka'
        };
      }

      if (parsedBody.limit && parsedBody.limit <= 0) {
        return {
          status: 'false',
          message: 'Limit harus lebih dari 0'
        };
      }

      return await this.analisisService.getAnalisisGuaranteed(parsedBody);

    } catch (error: any) {
      console.error('Controller error:', error);
      return {
        status: 'false',
        message: `Controller error: ${error.message}`
      };
    }
  }
}