import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column()
  category: string;

  @Column()
  stock: number;

  @Column( { default: true })
  isActive: boolean;

  @Column( { default: false })
  isDeleted: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
