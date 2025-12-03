// penjadwalan/penjadwalan.module.ts
import { Module } from '@nestjs/common';
import { PenjadwalanService } from './penjadwalan.service';
import { PenjadwalanController } from './penjadwalan.controller';
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
  controllers: [PenjadwalanController],
  providers: [PenjadwalanService],
  exports: [PenjadwalanService],
})
export class PenjadwalanModule {}