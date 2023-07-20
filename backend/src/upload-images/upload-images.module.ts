import { Module } from '@nestjs/common';
import { UploadImagesService } from './upload-images.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
  ],
  providers: [UploadImagesService],
  exports: [UploadImagesService],
})
export class UploadImagesModule { }
