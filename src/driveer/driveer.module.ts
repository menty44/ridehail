import { Module } from '@nestjs/common';
import { DriveerService } from './driveer.service';
import { DriveerController } from './driveer.controller';

@Module({
  controllers: [DriveerController],
  providers: [DriveerService]
})
export class DriveerModule {}
