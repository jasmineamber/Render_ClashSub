/*
 * @Author       : jasmineamber
 * @Date         : 2023-04-04 17:05:47
 * @LastEditors  : jasmineamber
 * @LastEditTime : 2023-04-25 16:07:07
 * @FilePath     : /src/config/redis.config.ts
 * @Description  :
 */
import { RedisOptions } from "ioredis";
/**
 * 数据库配置
 */
export const redis = (): RedisOptions => ({
  host: process.env.REDIS_HOST,
  port: parseInt(process.env.REDIS_PORT),
  username: process.env.REDIS_USER,
  password: process.env.REDIS_PASS,
  tls: {
    checkServerIdentity: () => undefined,
  },
});
