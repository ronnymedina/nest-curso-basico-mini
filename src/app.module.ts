import { Module } from '@nestjs/common';
import { UsersModule } from './apis/users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
