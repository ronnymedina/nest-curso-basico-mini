import { Controller, Get, Post, Body } from '@nestjs/common';

import { CreateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  @Get() // users/
  getUsers(): string {
    return 'users';
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): CreateUserDto {
    return createUserDto;
  }
}
