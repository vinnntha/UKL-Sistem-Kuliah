// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { DosenModule } from './dosen/dosen.module';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { MataKuliahModule } from './mata-kuliah/mata-kuliah.module';
import { PenjadwalanModule } from './penjadwalan/penjadwalan.module';
import { AnalisisModule } from './analisis/analisis.module';
import { PilihMahasiswaModule } from './pilih-mahasiswa/pilih-mahasiswa.module'; 

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    DosenModule,
    MahasiswaModule,
    MataKuliahModule,
    PenjadwalanModule,
    AnalisisModule,
    PilihMahasiswaModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}