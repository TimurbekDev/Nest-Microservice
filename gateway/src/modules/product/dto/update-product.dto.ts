import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiPropertyOptional({ description: 'Name of the product', example: 'Laptop' })
  name?: string;

  @ApiPropertyOptional({ description: 'Price of the product', example: 1500.0 })
  price?: number;

  @ApiPropertyOptional({ description: 'Number of items in stock', example: 10 })
  count?: number;

  @ApiPropertyOptional({ description: 'Type or category of the product', example: 'Electronics' })
  category_id?: string;
}
