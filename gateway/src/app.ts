import { CategoryModule } from '@modules';
import { Module } from '@nestjs/common';
import { ProductModule } from './modules/product/product.module';
import { UserModule } from './modules/user/user.module';
import { ChatModule } from './modules/chat/chat.module';

@Module({
  imports: [CategoryModule,ProductModule,UserModule,ChatModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
