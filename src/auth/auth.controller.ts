// auth/auth.controller.ts
import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth-guards';
import { RolesGuard } from './roles.guards';
import { Roles } from './roles.decotator';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: { 
    username: string; 
    password: string;
    role: string;
    mahasiswa_id?: number;
  }) {
    return this.authService.register(
      registerDto.username,
      registerDto.password,
      registerDto.role,
      registerDto.mahasiswa_id
    );
  }

  @Post('register/mahasiswa')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async registerMahasiswa(@Body() registerDto: {
    username: string;
    password: string;
    nim: string;
    nama_mahasiswa: string;
    jenis_kelamin: string;
    jurusan: string;
  }) {
    return this.authService.registerMahasiswa(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    return this.authService.login(loginDto.username, loginDto.password);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return {
      status: 'success',
      message: 'Profile berhasil diambil',
      data: {
        user: req.user,
      }
    };
  }

  @Get('public')
  testPublic() {
    return {
      status: 'success',
      message: 'Public endpoint berhasil diakses',
      timestamp: new Date().toISOString()
    };
  }
  
}