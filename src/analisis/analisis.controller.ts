// analisis/analisis.controller.ts
import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { AnalisisService } from './analisis.service';

@Controller('api/analisis')
export class AnalisisController {
  constructor(private readonly analisisService: AnalisisService) {}

  @Post('top-matakuliah-dosen')
  async getTopMatakuliahDosen(@Body() body: any) {
    console.log('📨 POST /analisis/top-matakuliah-dosen');
    console.log('Body:', body);
    
    try {
      // Coba dengan filter dulu
      const result = await this.analisisService.getAnalisisWithFilter(body);
      
      // Jika hasil kosong, coba tanpa filter
      if (result.data.top_matakuliah.length === 0 && result.data.top_dosen.length === 0) {
        console.log('No data with filter, trying without filter...');
        return await this.analisisService.getAnalisisSimple(body);
      }
      
      return result;
      
    } catch (error) {
      console.error('Controller error:', error);
      return await this.analisisService.getAnalisisSimple(body);
    }
  }

  @Get('test')
  async testAnalisis(@Query('limit') limit?: string) {
    console.log('📨 GET /analisis/test');
    
    const params = {
      limit: limit ? parseInt(limit, 10) : 10
    };
    
    return await this.analisisService.getAnalisisSimple(params);
  }

  @Get('debug/krs')
  async debugKrs() {
    console.log('📨 GET /analisis/debug/krs');
    return await this.analisisService.debugKrsData();
  }

  // Endpoint dengan query parameters
  @Get('top')
  async getTopWithQuery(
    @Query('tahun_ajaran') tahun_ajaran?: string,
    @Query('semester') semester?: string,
    @Query('limit') limit?: string
  ) {
    console.log('📨 GET /analisis/top', { tahun_ajaran, semester, limit });
    
    const params = {
      tahun_ajaran: tahun_ajaran || "2024/2025",
      semester: semester ? parseInt(semester, 10) : 1,
      limit: limit ? parseInt(limit, 10) : 10
    };
    
    return await this.analisisService.getAnalisisWithFilter(params);
  }
}