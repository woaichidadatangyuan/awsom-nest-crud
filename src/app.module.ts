/*
 * @Author: goumang
 * @Date: 2023-12-17 09:23:39
 * @LastEditors: goumang
 * @LastEditTime: 2023-12-17 16:40:57
 * @FilePath: /short-url/src/app.module.ts
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', //数据库类型
      host: 'localhost', //ip地址
      port: 3306, //端口
      username: 'root', //登录名
      password: 'Xjh_885983', // 密码
      database: 'auth', // 数据库名称
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, //定义数据库结构与实体类字段同步（这里一旦数据库缺少字段就自动加入，根据需要使用）
    }),
    UsersModule, //加载子模块
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
