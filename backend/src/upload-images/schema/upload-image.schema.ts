import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import mongoose from 'mongoose';

export type UploadImageDocument = UploadImage & mongoose.Document;

@Schema()
export class UploadImage {
  @Transform(({ value }) => value.toString())
  _id: mongoose.Schema.Types.ObjectId;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true, unique: true })
  key: string;
}
export const UploadImageSchema = SchemaFactory.createForClass(UploadImage);
