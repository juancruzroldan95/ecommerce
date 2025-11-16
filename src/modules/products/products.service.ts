import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOne({
      where: {
        id,
      },
    });
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create({
      ...createProductDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return this.productRepository.save(product);
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product | null> {
    await this.productRepository.update(id, {
      ...updateProductDto,
      updatedAt: new Date(),
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
