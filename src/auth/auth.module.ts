// auth/auth.module.ts - UPDATE JADI GLOBAL
import { Module, Global } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt-strategy';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';

@Global() // TAMBAHKAN @Global() DECORATOR
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'Secret_Key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, PrismaService],
  exports: [JwtModule, AuthService, JwtStrategy], // EXPORT JwtStrategy juga
})
export class AuthModule {}