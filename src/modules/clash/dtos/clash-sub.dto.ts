/*
 * @Author       : jasmineamber
 * @Date         : 2023-04-06 21:54:30
 * @LastEditors  : jasmineamber
 * @LastEditTime : 2023-04-07 09:32:41
 * @FilePath     : /src/modules/clash/dtos/clash-sub.dto.ts
 * @Description  :
 */
import { PartialType } from "@nestjs/swagger";
import { Equals, IsNotEmpty } from "class-validator";

export class QuerySubDto {
  @Equals(process.env.token, { message: "Token不正确" })
  token!: string;

  @IsNotEmpty({ message: "订阅名称不能为空" })
  name!: string;
}

export class UpdateSubDto extends PartialType(QuerySubDto) {
  @IsNotEmpty({ message: "订阅地址不能为空" })
  url?: string;
}
