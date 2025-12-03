// penjadwalan/penjadwalan.module.ts
import { Module } from '@nestjs/common';
import { PenjadwalanService } from './penjadwalan.service';
import { PenjadwalanController } from './penjadwalan.controller';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from '../auth/auth.module'; // IMPORT AuthModule

@Module({
  imports: [AuthModule], // TAMBAHKAN INI
  controllers: [PenjadwalanController],
  providers: [PenjadwalanService, PrismaService],
})
export class PenjadwalanModule {}