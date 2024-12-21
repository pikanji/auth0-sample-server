import { Module } from '@nestjs/common';
import { JwtAuth0Strategy } from './strategies/jwt-auth0.strategy';

@Module({
  providers: [JwtAuth0Strategy],
})
export class AuthModule {}
