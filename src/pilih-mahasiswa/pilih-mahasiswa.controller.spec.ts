import { Test, TestingModule } from '@nestjs/testing';
import { PilihMahasiswaController } from './pilih-mahasiswa.controller';
import { PilihMahasiswaService } from './pilih-mahasiswa.service';

describe('PilihMahasiswaController', () => {
  let controller: PilihMahasiswaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PilihMahasiswaController],
      providers: [PilihMahasiswaService],
    }).compile();

    controller = module.get<PilihMahasiswaController>(PilihMahasiswaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
