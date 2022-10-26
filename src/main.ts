import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  // AppModule에 대한 Module을 생성함.
  // 이 Module 자체가 라우팅 파일이 되는 듯~
  
  // Root Module을 생성해줌.
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
