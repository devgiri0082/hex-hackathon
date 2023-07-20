import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUploadImageDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
