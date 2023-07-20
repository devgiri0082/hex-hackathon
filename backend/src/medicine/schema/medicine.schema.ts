import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type MedicineDocument = Medicine & Document

@Schema()
export class Medicine {
  @Prop({ required: true })
  name: string

  @Prop({required: true})
  price: string

  @Prop()
  description: string

  @Prop()
  dosage: string

  @Prop()
  possibleSideEffect: string

  @Prop()
  images: string[]

  @Prop()
  requiresPrescription: boolean
}

export const medicineSchema = SchemaFactory.createForClass(Medicine);