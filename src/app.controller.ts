/*
 * @Author: goumang
 * @Date: 2023-12-17 09:23:39
 * @LastEditors: goumang
 * @LastEditTime: 2023-12-17 14:01:36
 * @FilePath: /short-url/src/app.controller.ts
 * @Description: 生成路由文件
 */
import { Controller, Get, Post, Delete, Patch, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  create(@Body() data: any): string {
    console.log(data);
    return 'Handle POST request';
  }

  @Delete()
  remove(): string {
    return 'Handle DELETE request';
  }

  @Patch()
  update(): string {
    return 'Handle PATCH request';
  }
}
