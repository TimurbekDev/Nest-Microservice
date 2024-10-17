import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern('get_all_products')
  async getAllProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @MessagePattern('get_product')
  async getProduct(@Payload() id: number): Promise<Product> {
    return this.productService.findOne(id);
  }

  @MessagePattern('create_product')
  async createProduct(@Payload() product: Product): Promise<Product> {
    return this.productService.create(product);
  }

  @MessagePattern('update_product')
  async updateProduct(@Payload() data: { id: number; product: Partial<Product> }): Promise<Product> {
    const { id, product } = data;
    return this.productService.update(id, product);
  }

  @MessagePattern('delete_product')
  async deleteProduct(@Payload() id: number){
    return this.productService.delete(id);
  }
}
