import { Controller, Get, Request, UseGuards, Headers } from '@nestjs/common';
import { JwtAuth0Guard } from './common/guards/jwt-auth0.guard';
import * as jwt from 'jsonwebtoken';

@Controller()
export class AppController {
  @UseGuards(JwtAuth0Guard)
  @Get('mysub')
  getMySub(@Request() req: any): string {
    return `Authenticated User sub: ${req.user.sub}`;
  }

  @Get('token')
  debugToken(@Headers('authorization') authHeader: string) {
    const token = authHeader?.split(' ')[1];
    if (!token) {
      return { error: 'No token provided' };
    }

    const decoded = jwt.decode(token, { complete: true });
    return { decoded };
  }
}
