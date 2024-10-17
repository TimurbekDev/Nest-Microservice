import { CategoryModule } from '@modules';
import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [CategoryModule,ProductModule,UserModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
