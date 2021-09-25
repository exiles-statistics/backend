import { Module } from '@nestjs/common';
import { V0Module } from "src/modules/v0/v0.module";
import { RootController } from "src/modules/root/root.controller";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    V0Module,
    MongooseModule.forRoot('mongodb://localhost/nest')
  ],
  controllers: [RootController]
})
export class RootModule {}
