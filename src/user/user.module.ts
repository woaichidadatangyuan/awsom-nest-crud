/*
 * @Author: goumang
 * @Date: 2023-12-17 14:04:11
 * @LastEditors: goumang
 * @LastEditTime: 2023-12-17 15:06:13
 * @FilePath: /short-url/src/user/user.module.ts
 * @Description: 创建业务Module
 */
import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], //导入并注册实体
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}