import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Response, Request } from 'express';

import { AuthService } from './auth.service';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() body: RegisterDto, @Res() response: Response) {
    try {
      const jwt = await this.authService.register(body);

      response.cookie('jwt', jwt, { httpOnly: true });

      return { message: 'Registration successful.' };
    } catch (error) {
      throw new HttpException(
        error.message || 'Registration failed.',
        HttpStatus.METHOD_NOT_ALLOWED,
      );
    }
  }

  @Post('/login')
  async login(@Body() body: LoginDto, @Res() response: Response) {
    try {
      const jwt = await this.authService.login(body);

      response.cookie('jwt', jwt, { httpOnly: true });

      return { message: 'Authentication successful.' };
    } catch (error) {
      throw new HttpException(
        error.message || 'Authentication failed.',
        HttpStatus.METHOD_NOT_ALLOWED,
      );
    }
  }

  @Post('/logout')
  async logout(@Res() response: Response, @Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];

      if (!cookie) {
        throw new HttpException(
          'You are not logged in!',
          HttpStatus.UNAUTHORIZED,
        );
      }

      const data = await this.authService.verifyJwtToken(cookie.token);

      if (!data) {
        throw new UnauthorizedException('The JWT cannot be verified!');
      }

      response.clearCookie('jwt');

      return { message: 'Logout successful.' };
    } catch (error) {
      throw new HttpException(
        error.message || 'Logout failed.',
        HttpStatus.METHOD_NOT_ALLOWED,
      );
    }
  }
}
