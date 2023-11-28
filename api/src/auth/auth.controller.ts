import {
  Body,
  Controller,
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
  async register(
    @Body() registerDto: RegisterDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const jwt = await this.authService.register(registerDto);

      response.cookie('jwt', jwt, { httpOnly: true });

      return { message: 'Registration successful.' };
    } catch (error) {
      throw new UnauthorizedException(error.message || 'Registration failed.');
    }
  }

  @Post('/login')
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const jwt = await this.authService.login(loginDto);
      response.cookie('jwt', jwt, { httpOnly: true });

      return { message: 'Authentication successful.' };
    } catch (error) {
      throw new UnauthorizedException(
        error.message || 'Authentication failed.',
      );
    }
  }

  @Post('/logout')
  async logout(
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request,
  ) {
    try {
      const cookie = request.cookies['jwt'];

      if (!cookie) {
        throw new UnauthorizedException('You are not logged in!');
      }

      const data = await this.authService.verifyJwtToken(cookie.token);

      if (!data) {
        throw new UnauthorizedException('The JWT cannot be verified!');
      }

      response.clearCookie('jwt');

      return { message: 'Logout successful.' };
    } catch (error) {
      throw new UnauthorizedException(error.message || 'Logout failed.');
    }
  }
}
