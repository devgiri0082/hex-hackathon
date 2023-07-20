import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './schema/schema';
import { AuthMiddleware } from '../middleware/auth.middleware';
import { UploadImagesModule } from '../upload-images/upload-images.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
    UploadImagesModule
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}

