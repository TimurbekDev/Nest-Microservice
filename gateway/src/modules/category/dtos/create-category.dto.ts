import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto{
    @ApiProperty({description: 'Category name'})
    name : string
}