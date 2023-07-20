import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFiles, Headers } from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ObjectId } from 'mongoose';

@Controller('medicine')
@UseInterceptors(AnyFilesInterceptor())
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) { }

  @Post()
  create(@Headers() header, @UploadedFiles() files: Array<Express.Multer.File>, @Body() createMedicineDto: CreateMedicineDto) {
    return this.medicineService.create(files, createMedicineDto, header.authorization.split(" ")[1]);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectId) {
    return this.medicineService.remove(id);
  }
}
