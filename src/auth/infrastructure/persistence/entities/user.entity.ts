import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class UserEntity extends BaseEntity {
  constructor() {
    super();
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "user" })
  user?: string;

  @Column({ name: "password" })
  password?: string;
}
