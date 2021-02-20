import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { UserSerializer } from './serializers/user.serializer';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  @ApiOkResponse({ type: UserSerializer, isArray: true })
  @ApiInternalServerErrorResponse()
  async getUsers(): Promise<UserSerializer[]> {
    const data = await this.usersService.findAll();

    return plainToClass(UserSerializer, data, { excludeExtraneousValues: true });
  }

  @Post()
  @ApiCreatedResponse({ description: 'example', type:  UserSerializer})
  @ApiInternalServerErrorResponse({ description: 'example' })
  @ApiBadRequestResponse({ description: 'example' })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserSerializer> {
    const data = await this.usersService.create(createUserDto);

    return plainToClass(UserSerializer, data, { excludeExtraneousValues: true })
  }

  @Get(':id')
  @ApiOkResponse({ type: UserSerializer})
  @ApiInternalServerErrorResponse()
  async findUser(@Param('id') id: string): Promise<UserSerializer> {
    const data = await this.usersService.findUser(id);

    return plainToClass(UserSerializer, data, { excludeExtraneousValues: true });
  }
}
