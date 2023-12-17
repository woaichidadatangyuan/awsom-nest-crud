/*
 * @Author: goumang
 * @Date: 2023-12-17 14:13:30
 * @LastEditors: goumang
 * @LastEditTime: 2023-12-17 14:56:19
 * @FilePath: /short-url/src/user/user.entity.ts
 * @Description: 创建实体 ORM映射关系
 */
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// 表名
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30, nullable: true, comment: 'user name'})
  name: string;

  @Column({ nullable: true, comment: 'user age'})
  age: number;

  @CreateDateColumn({ name: 'create_at', type: 'datetime', comment: 'created time'})
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime', comment: 'updated time'})
  updateAt: Date;
}

