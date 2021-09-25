import { Body, Controller, Post } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { CreateReportDto } from "src/modules/report/dto/CreateReportDto";

@Controller({
  path: "report",
  version: "0"
})
export class ReportController {

  @Post()
  @ApiOperation({
    summary: "Submit a singular drop report"
  })
  postReport(@Body() createReportDto: CreateReportDto) {
    console.log(createReportDto)
  }
}
