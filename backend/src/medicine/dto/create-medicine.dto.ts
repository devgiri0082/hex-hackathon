import { IsArray, IsString } from "class-validator";

export class CreateMedicineDto {
  @IsString()
  name: string

  @IsString()
  price: string

  @IsString()
  description: string

  @IsString()
  dose: string

  @IsString()
  possibleSideEffect: string

  @IsString()
  requiredPrescription: boolean

}
