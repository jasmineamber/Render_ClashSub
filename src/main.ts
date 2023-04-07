/*
 * @Author       : jasmineamber
 * @Date         : 2023-04-04 17:02:43
 * @LastEditors  : jasmineamber
 * @LastEditTime : 2023-04-07 09:42:57
 * @FilePath     : /src/main.ts
 * @Description  :
 */
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
