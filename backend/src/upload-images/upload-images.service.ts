import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { S3 } from 'aws-sdk';
import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UploadImagesService {
  constructor(
    private readonly configService: ConfigService,
  ) { }
  async uploadImageToAWS(dataBuffer: Buffer, fileName: string) {
    try {
      const s3 = new S3();
      const uploadResult = await s3
        .upload({
          Bucket: this.configService.get('AWS_PROFILE_BUCKET_NAME'),
          Body: dataBuffer,
          Key: `${uuid()}-${fileName}`,
          ACL: 'public-read',
        })
        .promise();
      return uploadResult;
    } catch (err) {
      console.log(err);
      const status = err.status || HttpStatus.BAD_REQUEST;
      const error =
        err.response?.error || 'Sorry we are unable to process your request';
      throw new HttpException({ status: status, error: error }, status);
    }
  }
}
