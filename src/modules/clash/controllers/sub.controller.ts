/*
 * @Author       : jasmineamber
 * @Date         : 2023-04-06 22:06:25
 * @LastEditors  : jasmineamber
 * @LastEditTime : 2023-04-25 16:21:43
 * @FilePath     : /src/modules/clash/controllers/sub.controller.ts
 * @Description  :
 */
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Res,
  ValidationPipe,
} from "@nestjs/common";

import { SubService } from "../services";
import { QuerySubDto, UpdateSubDto } from "../dtos";
import { FastifyReply } from "fastify";
import { AxiosHeaders } from "axios";

@Controller()
export class SubController {
  constructor(protected service: SubService) {}

  @Get()
  async query(
    @Query(
      new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
      })
    )
    query: QuerySubDto,
    @Res() res: FastifyReply
  ) {
    const name = query.name;
    const r = await this.service.query(name);
    r.subscribe((reply) => {
      const data = reply.data;
      const headers = <AxiosHeaders>reply.headers;
      for (let key in headers.toJSON()) {
        if (key === "transfer-encoding") {
          continue;
        }
        res.header(key, headers[key]);
      }
      res.send(data);
    });
  }

  @Post("/update")
  async store(
    @Body(
      new ValidationPipe({
        transform: true,
        forbidUnknownValues: true,
        validationError: { target: false },
      })
    )
    data: UpdateSubDto
  ) {
    const { name, url } = data;
    await this.service.update(name, url);
    return `更新成功`;
  }

  @Get("/ping")
  async ping() {
    return "OK";
  }
}
