// auth/jwt-auth.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const authHeader = request.headers.authorization;
    console.log('Auth Header:', authHeader); // Debug
    
    if (!authHeader) {
      throw new UnauthorizedException('Token tidak ditemukan');
    }

    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer' || !token) {
      throw new UnauthorizedException('Format token tidak valid');
    }

    try {
      console.log('Token:', token); // Debug
      
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET || 'Secret_Key',
      });

      console.log('Payload:', payload); // Debug
      
      if (!payload.role) {
        throw new UnauthorizedException('Token tidak memiliki role');
      }

      request.user = payload;
      return true;
    } catch (err) {
      console.error('JWT Error:', err);
      throw new UnauthorizedException('Token tidak valid atau kadaluarsa');
    }
  }
}