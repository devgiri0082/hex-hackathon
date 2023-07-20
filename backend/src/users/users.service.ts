import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/schema';
import { Model } from 'mongoose';
import { UploadImagesService } from '../upload-images/upload-images.service';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
    @Inject(UploadImagesService) private uploadImageService: UploadImagesService) { }
  async create(files: Array<Express.Multer.File>, userData: CreateUserDto, jwtString: string) {
    try {
      if (userData.type === 'pharmacy') {
        if (files.length < 2) {
          throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              error: 'no image found',
            },
            HttpStatus.BAD_REQUEST,
          );
        } else {
          let panImage = files.find((file) => file.fieldname === 'panImage');
          let vatImage = files.find((file) => file.fieldname === "vatImage")
          let panImageAWS = await this.uploadImageService.uploadImageToAWS(panImage.buffer, `${panImage.originalname}`)
          let vatImageAWS = await this.uploadImageService.uploadImageToAWS(vatImage.buffer, vatImage.originalname)
          const createUser = new this.userModel({ ...userData, panImageUrl: panImageAWS.Location, vatImageUrl: vatImageAWS.Location, email: this.getEmail(jwtString) });
          return createUser.save();
        }
      } else {
        const createUser = new this.userModel(userData);
        return createUser.save();
      }

    } catch (err) {
      console.log(err);
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: err.response.error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  private getEmail(jwt) {
    return JSON.parse(atob(jwt.split('.')[1])).email
  }
}
