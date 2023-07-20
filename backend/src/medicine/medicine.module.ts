import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { MedicineController } from './medicine.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Medicine, medicineSchema } from './schema/medicine.schema';
import { UploadImagesModule } from '../upload-images/upload-images.module';
import { AuthMiddleware } from '../middleware/auth.middleware';

@Module({
  imports: [MongooseModule.forFeature([{ name: Medicine.name, schema: medicineSchema }]), UploadImagesModule],
  controllers: [MedicineController],
  providers: [MedicineService]
})
export class MedicineModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }

}
