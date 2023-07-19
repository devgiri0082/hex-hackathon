import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    HttpModule,
    JwtModule.register({
      secret: 'sk_test_UOXLDBZDUnWpklb5pgBRiKM32KGOObBmVxrwcT1vvQ',
    }),
  ],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
