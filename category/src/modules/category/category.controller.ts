import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @MessagePattern('createCategory')
  async create(@Payload() createCategoryDto:CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @MessagePattern('getAllCategories')
  findAll() {
    return this.categoryService.findAll();
  }

  @MessagePattern('getCategoryById')
  findOne(@Payload() id: number) {
    return this.categoryService.findOne(id);
  }


  @MessagePattern('updatecategory')
  update(@Payload() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(updateCategoryDto);
  }

  remove(@Payload() id: number) {
    return this.categoryService.remove(id);
  }
}
