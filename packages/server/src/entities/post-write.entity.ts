import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './userbase.entity';

@Entity('POSTBOARD')
export class PostWriteEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    comment: '순서',
  })
  no: number;

  @Column({
    type: 'varchar',
    length: 30,
    comment: '제목',
  })
  title: string;

  @OneToMany(() => User, (user) => user.no)
  @JoinColumn({ name: 'nickname' })
  writerNo: User[];

  @Column({
    type: 'text',
    name: 'CONTENT',
    comment: '내용',
  })
  content: string;

  @CreateDateColumn({
    type: 'datetime',
    default: 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    default: 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
  })
  updateAt: Date;
}
