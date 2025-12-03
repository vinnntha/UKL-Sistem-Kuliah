// mahasiswa/mahasiswa.module.ts
import { Module } from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service';
import { MahasiswaController } from './mahasiswa.controller';
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
  controllers: [MahasiswaController],
  providers: [MahasiswaService],
  exports: [MahasiswaService],
})
export class MahasiswaModule {}