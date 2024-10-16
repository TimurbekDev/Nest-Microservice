import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { ApiTags } from "@nestjs/swagger";
import { CreateCategoryDto } from "./dtos";

@ApiTags('Category')
@Controller('Category')
export class CategoryController{
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    getAllCategories(){
        return this.categoryService.getAllCategories();
    }

    @Post()
    createCategory(@Body() createCategoryDto:CreateCategoryDto){
        return this.categoryService.createCategory(createCategoryDto.name)
    }


    @Patch(':id')
    updateCategory(@Param('id') id:number,@Body() updateCategoryDto:CreateCategoryDto){
        return this.categoryService.updateCategory(updateCategoryDto.name,id)
    }

    @Delete(':id')
    deleteCategory(@Param('id') id:number){
        return this.categoryService.deleteCategory(id)
    }
}
