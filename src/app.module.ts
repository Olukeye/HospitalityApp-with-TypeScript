import { Module } from '@nestjs/common';
import { loginModule } from './login/login.module';


@Module({
  imports: [loginModule],
})
export class AppModule {}
