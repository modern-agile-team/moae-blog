import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USERBASES')
export class User {
  @PrimaryGeneratedColumn()
  no: number;

  @Column({
    type: 'text',
    name: 'NAME',
  })
  nickname: string;

  @Column({
    type: 'text',
    name: 'NAME',
  })
  email: string;

  @CreateDateColumn({
    default: 'CURRENT_TIMESTAMP',
  })
  createAt: Date;
}
