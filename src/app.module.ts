import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './apis/users/users.module';
import config from './config';

@Module({
  imports: [
    MongooseModule.forRoot(config.DATABASE_URL),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
