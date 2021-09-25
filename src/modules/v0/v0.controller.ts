import { CacheInterceptor, Controller, Get, UseInterceptors } from "@nestjs/common";
import { BonjourDto } from "src/modules/v0/dto/bonjour.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller({
  version: "0"
})
@ApiTags('Bonjour')
export class V0Controller {
  @Get()
  bonjour(): BonjourDto {
    return {
      version: "v0",
      message: "Welcome to the Exiles API backend",
      documentation: "/_/docs"
    }
  }
}
