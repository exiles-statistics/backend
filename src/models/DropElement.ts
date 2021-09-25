import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class DropElement {
  @IsString()
  @IsNotEmpty()
  materialId: string

  @IsNumber()
  @IsNotEmpty()
  quantity: number
}