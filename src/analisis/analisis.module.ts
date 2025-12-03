// analisis/analisis.module.ts
import { Module } from '@nestjs/common';
import { AnalisisService } from './analisis.service';
import { AnalisisController } from './analisis.controller';
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
  controllers: [AnalisisController],
  providers: [AnalisisService],
  exports: [AnalisisService],
})
export class AnalisisModule {}