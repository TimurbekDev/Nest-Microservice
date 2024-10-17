import { forwardRef, Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductClientService } from './product.service';
import { CategoryModule } from '../category';

@Module({
  controllers: [ProductController],
  providers: [ProductClientService],
  imports : [forwardRef(()=>CategoryModule)]
})
export class ProductModule {}
