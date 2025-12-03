// pilih-mahasiswa/pilih-mahasiswa.module.ts
import { Module } from '@nestjs/common';
import { PilihMahasiswaService } from './pilih-mahasiswa.service';
import { PilihMahasiswaController } from './pilih-mahasiswa.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'Secret_Key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [PilihMahasiswaController],
  providers: [PilihMahasiswaService],
  exports: [PilihMahasiswaService],
})
export class PilihMahasiswaModule {}