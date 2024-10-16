import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './models';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryModel : typeof Category){}
  async create(createCategoryDto:CreateCategoryDto) {
    return await this.categoryModel.create({
      name : createCategoryDto.name
    })
  }

  async findAll() {
    return await this.categoryModel.findAll();
  }

  async findOne(id: number) {
    const category = await this.categoryModel.findByPk(id)

    if(!category)
      throw new NotFoundException('Category not found')

    return category;
  }

  async update(updateCategoryDto:UpdateCategoryDto) {
    const category = await this.findOne(updateCategoryDto.id)
    await category.update({
      name: updateCategoryDto.name
    })
    return this.findOne(updateCategoryDto.id);
  }

  async remove(id: number) {
    const category = await this.findOne(id)
    await category.destroy()

    return 'Category successfully deleted'
  }
}
