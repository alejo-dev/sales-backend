import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "products" })
export class ProductEntity extends BaseEntity {
  constructor() {
    super();
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'name' })
  name?: string;

  @Column({ name: 'description' })
  description?: string;

  @Column({ name: 'price' })
  price?: number;
}
