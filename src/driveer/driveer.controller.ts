import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriveerService } from './driveer.service';
import { CreateDriveerDto } from './dto/create-driveer.dto';
import { UpdateDriveerDto } from './dto/update-driveer.dto';

@Controller('driveer')
export class DriveerController {
  constructor(private readonly driveerService: DriveerService) {}

  @Post()
  create(@Body() createDriveerDto: CreateDriveerDto) {
    return this.driveerService.create(createDriveerDto);
  }

  @Get()
  findAll() {
    return this.driveerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driveerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriveerDto: UpdateDriveerDto) {
    return this.driveerService.update(+id, updateDriveerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driveerService.remove(+id);
  }
}
