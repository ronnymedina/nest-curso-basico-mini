import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { User } from './user.model';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  findUser(@Param('id') id: string) {
    return this.usersService.findUser(id)
  }
}
