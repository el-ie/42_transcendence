import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  //imports: [PassportModule],//chatgpt
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],//chatgpt
})
export class AuthModule {}
