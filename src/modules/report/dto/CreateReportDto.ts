import { DropElement } from "src/models/DropElement";
import { ArrayMaxSize, IsArray, IsNotEmpty, IsString, MaxLength, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class CreateReportDto {
  @IsString()
  @IsNotEmpty({
    message: '`userAgent` is a required field'
  })
  userAgent: string

  @IsString()
  @IsNotEmpty({
    message: '`sectorId` is a required field'
  })
  sectorId: string

  @IsArray()
  @ArrayMaxSize(32, {
    message: '`drops` may contain at maximum $constraint1 items'
  })
  @IsNotEmpty({
    message: '`drops` is a required field. If there\'s empty drops, provide an empty array'
  })
  @ValidateNested({ each: true })
  @Type(() => DropElement)
  drops: DropElement[]
}