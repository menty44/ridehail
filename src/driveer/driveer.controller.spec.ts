import { Test, TestingModule } from '@nestjs/testing';
import { DriveerController } from './driveer.controller';
import { DriveerService } from './driveer.service';

describe('DriveerController', () => {
  let controller: DriveerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriveerController],
      providers: [DriveerService],
    }).compile();

    controller = module.get<DriveerController>(DriveerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
