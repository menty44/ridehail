import { PartialType } from '@nestjs/mapped-types';
import { CreateDriveerDto } from './create-driveer.dto';

export class UpdateDriveerDto extends PartialType(CreateDriveerDto) {}
