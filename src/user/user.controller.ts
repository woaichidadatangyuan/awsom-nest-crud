/*
 * @Author: goumang
 * @Date: 2023-12-17 15:00:37
 * @LastEditors: goumang
 * @LastEditTime: 2023-12-17 17:31:26
 * @FilePath: /short-url/src/user/user.controller.ts
 * @Description: 创建路由对应的控制器
 */
import { Controller, Get, Post, Request, Query, Body, Param } from "@nestjs/common";
import { UsersService } from "./user.service";
import { User } from "./user.entity";

@Controller('user')
export class UsersController {
  // this.userService = new UsersService() 等价于 constructor
  constructor(private usersService: UsersService) {}
  
  //通过数据库查询用户list
  @Get('list')
  getList(): Promise<User[]> {
    return this.usersService.getList();
  }

  //通过id查询用户
  @Get('getUserId')
  async getUserById(@Query('id') id:string): Promise<User> {
    const userId: number = parseInt(id);
    return this.usersService.getUserById(userId);
  }

  // 增加用户
  @Post('addUser')
  addUser(@Body() body): Promise<string> {
    return this.usersService.updateUser(body);
  }

  //删除用户
  @Post('deleteUser')
  delUser(@Body() body): Promise<object> {
    return this.usersService.deleteUser(body);
  }

  //增加分页查询
  @Get('pageList')
  async findAll(@Query('page') page:number, @Query('pagesize') pagesize:number) {
    const [users, total] = await this.usersService.findAll(page, pagesize);
    return {
      data: users,
      total,
      page,
      pagesize
    }
  }

  //条件查询
  // @Get('findByConditions')
    // async findByConditions(@Query('name') conditions):Promise<User[]> {
    //   return this.usersService.findByConditions(conditions);
    // }
}