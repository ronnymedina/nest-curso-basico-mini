import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './apis/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://nestuser:nestuser@mydb:27017/nestdb?authSource=admin'),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
