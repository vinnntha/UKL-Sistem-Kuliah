import { Global, Module } from '@nestjs/common';
import { AuthController } from '../auth/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { BcryptService } from '../bcrypt/bcrypt.service';
import { BcryptModule } from '../bcrypt/bcrypt.module';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [BcryptService, BcryptModule, AuthService],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'Secret_Key',
      signOptions: { expiresIn: '1d' }
    })
  ]
})
export class AuthModule { }
