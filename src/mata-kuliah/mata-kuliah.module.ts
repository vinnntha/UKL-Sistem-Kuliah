import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guards';
import { MataKuliahService } from './mata-kuliah.service';
import { MataKuliahController } from './mata-kuliah.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    JwtModule.register({
      secret: 'Secret_Key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [MataKuliahController],
  providers: [MataKuliahService, JwtAuthGuard],
})
export class MataKuliahModule {}
