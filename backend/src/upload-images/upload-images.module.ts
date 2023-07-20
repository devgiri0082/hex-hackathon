import { Module } from '@nestjs/common';
import { UploadImagesService } from './upload-images.service';
import { UploadImagesController } from './upload-images.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UploadImage, UploadImageSchema } from './schema/upload-image.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      { name: UploadImage.name, schema: UploadImageSchema },
    ]),
  ],
  controllers: [UploadImagesController],
  providers: [UploadImagesService],
  exports: [UploadImagesService],
})
export class UploadImagesModule {}
