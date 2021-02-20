import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.model';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * Crear un usuario
   *
   * @public
   * @param {CreateUserDto} createCatDto
   * @returns {Promise<User>}
   * @example this.userService.create({ name: "example" })
   */
  create(createCatDto: CreateUserDto): Promise<User> {
    const createdCat = new this.userModel(createCatDto);

    return createdCat.save();
  }

  findAll(): Promise<User[]> {
    return this.userModel.find().lean() as unknown as Promise<User[]>;
  }

  findUser(id: string): Promise<User> {
    return this.userModel.findById(id).lean() as unknown as Promise<User>;
  }
}
