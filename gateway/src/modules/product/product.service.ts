import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CategoryService } from '../category';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductClientService {
  private client: ClientProxy;

  constructor(
    @Inject(CategoryService) private categoryService:CategoryService
  ) {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host:'localhost',
        port:3002
      },
    });
  }

  getAllProducts() {
    return this.client.send('get_all_products','');
  }

  getProduct(id: number) {
    return this.client.send('get_product', id);
  }

  createProduct(product: CreateProductDto) {
    try {
      this.categoryService.getCategoryById(product.category_id).subscribe(res=>{
        if(!res)
          throw new BadRequestException('category not found')
      });
    
      return this.client.send('create_product', product);
    } catch (error) {
      console.log(error.message);
    }
  }

  updateProduct(id: number, product: any) {
    return this.client.send('update_product', { id, product });
  }

  deleteProduct(id: number) {
    return this.client.send('delete_product', id);
  }
}
