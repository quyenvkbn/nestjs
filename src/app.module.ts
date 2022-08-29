import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ChatGateway } from './chat/chat.gateway';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [ChatGateway],
})
export class AppModule {}
