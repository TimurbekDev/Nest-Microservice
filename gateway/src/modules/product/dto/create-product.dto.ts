import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: 'Name of the product', example: 'Laptop' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Price of the product', example: 1500.0 })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({ description: 'Number of items in stock', example: 10 })
  @IsNotEmpty()
  @IsNumber()
  count: number;

  @ApiProperty({ description: 'Type or category of the product', example: 'Electronics' })
  @IsNotEmpty()
  @IsString()
  category_id: string;
}
