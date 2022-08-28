import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
      PassportModule,
            JwtModule.register({
            secret: 'jwtsecretkey',
            signOptions: {
              expiresIn: '1 hour',
            },
      })
  ],
  controllers: [AuthController],
  providers: [JwtStrategy],
})
export class AuthModule {}