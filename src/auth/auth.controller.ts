import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(
    private jwtService: JwtService,
  ) {}
  
  @Get('test')
  @UseGuards(AuthGuard('jwt'))
  testApi(@Req() req: Request) {
    console.log(req.user);
  }
  @Post('login')
  testApiA(@Req() req: Request) {
    const payload = { username: req.body.username, userId: req.body.userId };
    console.log(req.body);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}