/*
 * @Author       : jasmineamber
 * @Date         : 2023-04-04 17:02:43
 * @LastEditors  : jasmineamber
 * @LastEditTime : 2023-04-07 09:31:22
 * @FilePath     : /src/app.module.ts
 * @Description  :
 */
import { Module } from "@nestjs/common";

import { redis } from "./config";
import { RedisModule } from "./modules/redis/redis.module";
import { ClashSubModule } from "./modules/clash/clash.module";

@Module({
  imports: [RedisModule.forRoot(redis), ClashSubModule],
})
export class AppModule {}
