import { INestApplication, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { User, UserSchema } from './user.model';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const apiDescription = new DocumentBuilder()
  .setTitle('User Api')
  .setDescription('Example user')
  .setVersion('1.0')
  .addTag('user')
  .build();

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}

export const userDocument = (app: INestApplication) =>
  SwaggerModule.createDocument(app, apiDescription, { include: [UsersModule] });
