import * as redisStore from 'cache-manager-redis-store';
import { CacheModule, Module } from "@nestjs/common";
import { V0Controller } from 'src/modules/v0/v0.controller';
import { ReportModule } from "src/modules/report/report.module";

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
    ReportModule
  ],
  controllers: [V0Controller],

})
export class V0Module {}
