import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from '../service/user/users.service';
import { Users } from '../database/entities/users.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('title')
  title(): string {
    return 'This action will return users';
  }

  // @UseGuards(JwtAuthGuard)
  @Get('all')
  async listUsers(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  // @Post('create')
  // async create(@Request() req, @Res() res: Response) {
  //
  //   const self = this;
  //   bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
  //     // Store hash in your password DB.
  //     if (hash) {
  //       return self.usersService.create(req.body, hash).then(function(d) {
  //
  //         (d.status === true) ? res.status(HttpStatus.ACCEPTED).send(d) : res.status(HttpStatus.FORBIDDEN).send(d);
  //
  //       });
  //     }
  //   });
  //
  //
  // }
}
