import * as dotenv from 'dotenv';

dotenv.config()

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { userDocument } from './apis/users/users.module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  SwaggerModule.setup('docs/users', app, userDocument(app));

  await app.listen(3000);
}
bootstrap();
