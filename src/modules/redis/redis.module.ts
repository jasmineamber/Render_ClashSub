/*
 * @Author       : jasmineamber
 * @Date         : 2023-04-04 18:52:27
 * @LastEditors  : jasmineamber
 * @LastEditTime : 2023-04-06 22:31:56
 * @FilePath     : /src/modules/redis/redis.module.ts
 * @Description  :
 */
import { DynamicModule } from "@nestjs/common";
import { Module } from "@nestjs/common";
import IORedis, { RedisOptions } from "ioredis";

export const IORedisKey = "IORedis";

@Module({})
export class RedisModule {
  static forRoot(configRegister: () => RedisOptions): DynamicModule {
    const redisProvider = {
      provide: IORedisKey,
      useFactory: () => {
        const client = new IORedis(configRegister());

        return client;
      },
    };
    return {
      global: true,
      module: RedisModule,
      providers: [redisProvider],
      exports: [redisProvider],
    };
  }
}
