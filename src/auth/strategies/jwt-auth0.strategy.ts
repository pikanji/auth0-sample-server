import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as jwksRsa from 'jwks-rsa';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtAuth0Strategy extends PassportStrategy(Strategy, 'jwt_auth0') {
  constructor(configService: ConfigService) {
    super({
      secretOrKeyProvider: jwksRsa.passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 10,
        jwksUri: `https://${configService.get<string>('AUTH0_DOMAIN')}/.well-known/jwks.json`,
        handleSigningKeyError: (err, cb) => {
          console.error('Error fetching signing key:', err.message || err);
          cb(err);
        }
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: configService.get<string>('AUTH0_AUDIENCE'),
      issuer: `https://${configService.get<string>('AUTH0_DOMAIN')}/`,
      algorithms: ['RS256']
    });
  }

  async validate(payload: any) {
    console.log('JwtStrategy: validate called with payload:', payload);
    return { sub: payload.sub, ...payload }; // Return the validated payload
  }
}
