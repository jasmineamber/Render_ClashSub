/*
 * @Author       : jasmineamber
 * @Date         : 2023-04-06 22:08:19
 * @LastEditors  : jasmineamber
 * @LastEditTime : 2023-04-07 09:35:05
 * @FilePath     : /src/modules/clash/services/sub.service.ts
 * @Description  :
 */
import { Inject, Injectable } from "@nestjs/common";

import { IORedisKey } from "src/modules/redis/redis.module";
import Redis from "ioredis";
import { HttpService } from "@nestjs/axios";
import { Observable } from "rxjs";
import { AxiosResponse } from "axios";

@Injectable()
export class SubService {
  constructor(
    @Inject(IORedisKey) private readonly redisClient: Redis,
    private readonly httpService: HttpService
  ) {}

  async query(name: string): Promise<Observable<AxiosResponse<any, any>>> {
    let url = await this.redisClient.get(name);
    return this.httpService.get(url);
  }

  async update(name: string, url: string) {
    await this.redisClient.set(name, url);
  }
}
