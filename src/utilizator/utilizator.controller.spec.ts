import { Test, TestingModule } from '@nestjs/testing';
import { UtilizatorController } from './utilizator.controller';

describe('UtilizatorController', () => {
  let controller: UtilizatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UtilizatorController],
    }).compile();

    controller = module.get<UtilizatorController>(UtilizatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
