import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  // @ApiProperty()
  @PrimaryGeneratedColumn("uuid")
  user_id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  nickname: string;

  @Column({
    name: 'current_hashed_refresh_token',
    nullable: true
  })
  currentHashedRefreshToken?: string;


  @Column({type: 'timestamp'})
  created_at: Date;

  @Column({type: 'timestamp'})
  updated_at: Date;

  @Column({type: 'timestamp'})
  deleted_at: Date;
}
