import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  email: string

  @Prop({ required: true })
  type: 'patient' | 'pharmacy'

  @Prop()
  firstName: string

  @Prop()
  lastName: string

  @Prop()
  businessName: string

  @Prop()
  phoneNumber: string

  @Prop()
  panNumber: string

  @Prop()
  vatNumber: string

  @Prop()
  panImageUrl: string

  @Prop()
  vatImageUrl: string

  @Prop()
  address: string
}

export const userSchema = SchemaFactory.createForClass(User);