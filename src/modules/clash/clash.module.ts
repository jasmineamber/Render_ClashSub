/*
 * @Author       : jasmineamber
 * @Date         : 2023-04-06 21:53:24
 * @LastEditors  : jasmineamber
 * @LastEditTime : 2023-04-06 23:58:29
 * @FilePath     : /src/modules/clash/clash.module.ts
 * @Description  :
 */
import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { RedisModule } from "../redis/redis.module";
import { SubController } from "./controllers";
import { SubService } from "./services";

@Module({
  imports: [RedisModule, HttpModule],
  controllers: [SubController],
  providers: [SubService],
})
export class ClashSubModule {}
