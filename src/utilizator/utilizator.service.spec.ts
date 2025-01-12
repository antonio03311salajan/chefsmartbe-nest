import { Test, TestingModule } from '@nestjs/testing';
import { UtilizatorService } from './utilizator.service';

describe('UtilizatorService', () => {
  let service: UtilizatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UtilizatorService],
    }).compile();

    service = module.get<UtilizatorService>(UtilizatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
