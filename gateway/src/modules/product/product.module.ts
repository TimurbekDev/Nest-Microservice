import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductClientService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductClientService],
})
export class ProductModule {}
