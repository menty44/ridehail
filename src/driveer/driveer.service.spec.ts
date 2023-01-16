import { Test, TestingModule } from '@nestjs/testing';
import { DriveerService } from './driveer.service';

describe('DriveerService', () => {
  let service: DriveerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriveerService],
    }).compile();

    service = module.get<DriveerService>(DriveerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
