import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductClientService {
  private client: ClientProxy;

  constructor() {
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

  createProduct(product: any) {
    return this.client.send('create_product', product);
  }

  updateProduct(id: number, product: any) {
    return this.client.send('update_product', { id, product });
  }

  deleteProduct(id: number) {
    return this.client.send('delete_product', id);
  }
}
