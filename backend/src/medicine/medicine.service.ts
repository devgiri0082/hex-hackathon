import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Medicine, MedicineDocument } from './schema/medicine.schema';
import { Model, ObjectId, mongo } from 'mongoose';
import { UploadImagesService } from '../upload-images/upload-images.service';

@Injectable()
export class MedicineService {
  constructor(@InjectModel(Medicine.name) private medicineModel: Model<MedicineDocument>, @Inject(UploadImagesService) private uploadImageService: UploadImagesService) {

  }
  async create(files: Array<Express.Multer.File>, createMedicineDto: CreateMedicineDto, jwt: string) {
    try {
      if (files.length > 3) {
        throw new HttpException({ error: 'too many images' }, HttpStatus.BAD_REQUEST);
      }
      let images = [];
      for (const { buffer, originalname } of files) {
        let AWSImage = await this.uploadImageService.uploadImageToAWS(buffer, originalname)
        images.push(AWSImage.Location)
      }
      let newMedicine = new this.medicineModel({ ...createMedicineDto, images: images, email: this.getEmail(jwt) })
      return newMedicine.save()
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: err.response.error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

  }

  async remove(_id: ObjectId) {
    try {
      console.log({ id: _id });
      let removedMedicine = await this.medicineModel.deleteOne({ _id: _id });
      return removedMedicine;
    } catch (err) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: err.response.error,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  private getEmail(jwt) {
    return JSON.parse(atob(jwt.split('.')[1])).email
  }
}
