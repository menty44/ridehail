import { Injectable } from '@nestjs/common';
import { Users } from '../../database/entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcryptjs');
const saltRounds = 10;

@Injectable()
export class UsersService {
  private readonly users: Users[];

  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return await this.userRepository.find();
  }
}
