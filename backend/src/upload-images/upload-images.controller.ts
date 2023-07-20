import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { UploadImagesService } from './upload-images.service';
import { Express } from 'express';
import { AnyFilesInterceptor, FileInterceptor, MulterModule } from '@nestjs/platform-express';

@Controller('upload-image')
@UseInterceptors(AnyFilesInterceptor())
export class UploadImagesController {
  constructor(private readonly uploadImagesService: UploadImagesService) { }

  @Post()
  create(@UploadedFiles() files: Array<Express.Multer.File>, @Body() createUploadImageDto: any) {
    console.log(files);
    return { hello: 'test' }
    // return this.uploadImagesService.createProfile(file.buffer, file.originalname);
  }


}
