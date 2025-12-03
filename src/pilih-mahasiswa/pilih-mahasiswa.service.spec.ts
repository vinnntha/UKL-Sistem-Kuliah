import { Test, TestingModule } from '@nestjs/testing';
import { PilihMahasiswaService } from './pilih-mahasiswa.service';

describe('MahasiswaPilihService', () => {
  let service: PilihMahasiswaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PilihMahasiswaService],
    }).compile();

    service = module.get<PilihMahasiswaService>(PilihMahasiswaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
