import { Injectable } from '@nestjs/common';
import { CreateDriveerDto } from './dto/create-driveer.dto';
import { UpdateDriveerDto } from './dto/update-driveer.dto';

@Injectable()
export class DriveerService {
  create(createDriveerDto: CreateDriveerDto) {
    return 'This action adds a new driveer';
  }

  findAll() {
    return `This action returns all driveer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driveer`;
  }

  update(id: number, updateDriveerDto: UpdateDriveerDto) {
    return `This action updates a #${id} driveer`;
  }

  remove(id: number) {
    return `This action removes a #${id} driveer`;
  }
}
