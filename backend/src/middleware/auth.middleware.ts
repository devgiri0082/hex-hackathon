/* eslint-disable prettier/prettier */
import { NestMiddleware } from '@nestjs/common';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import * as dotenv from 'dotenv';
import { Clerk } from '@clerk/clerk-sdk-node';
dotenv.config();


export class AuthMiddleware implements NestMiddleware {
  use(req, res, next) {
    jwt({
      secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri:
          'https://settling-fly-95.clerk.accounts.dev/.well-known/jwks.json',
      }),
      issuer: 'https://settling-fly-95.clerk.accounts.dev',
      algorithms: ['RS256'],
    })(req, res, async (err) => {
      if (err) {
        const status = err.status || 500;
        const message =
          err.message || 'Sorry, we were unable to process your request.';
        return res.status(status).send({
          message,
          status,
        });
      } else {
        const clerk = Clerk({ secretKey: 'sk_test_UOXLDBZDUnWpklb5pgBRiKM32KGOObBmVxrwcT1vvQ' })
        let userId = res.req.user.sub;
        let user = await clerk.users.getUser(userId);
        console.log(user.emailAddresses[0].emailAddress);
        req.body = { email: user.emailAddresses[0].emailAddress }
      }

      next();
    });
  }
}
