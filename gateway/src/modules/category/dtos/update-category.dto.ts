import { ApiProperty } from "@nestjs/swagger";

export class UpdateCategoryDto{
    @ApiProperty({description: 'Category name'})
    name : string
}