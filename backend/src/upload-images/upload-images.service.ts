import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { S3 } from 'aws-sdk';
import mongoose from 'mongoose';
import { CreateUploadImageDto } from './dto/create-upload-image.dto';
import { UpdateUploadImageDto } from './dto/update-upload-image.dto';
import { UploadImage, UploadImageDocument } from './schema/upload-image.schema';
import { v4 as uuid } from 'uuid';

@Injectable()
export class UploadImagesService {
  constructor(
    @InjectModel(UploadImage.name)
    private uploadImageModel: mongoose.Model<UploadImageDocument>,
    private readonly configService: ConfigService,
  ) { }
  async createProfile(imageBuffer: Buffer, fileName: string) {
    const avatar = await this.uploadProfileToAWS(imageBuffer, fileName);
    const newAvatar = await new this.uploadImageModel({
      url: avatar.Location,
      key: avatar.Key,
    });
    return newAvatar.save();
  }
  async uploadProfileToAWS(dataBuffer: Buffer, fileName: string) {
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

  private getTokenPayload(jwt) {
    return JSON.parse(atob(jwt.split('.')[1]))
  }
}
