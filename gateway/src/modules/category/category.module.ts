import { Module } from "@nestjs/common";
import { CategoryClient } from "./category.client";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";

@Module({
    imports: [],
    controllers: [CategoryController],
    providers: [
        CategoryClient,CategoryService
    ],
})
export class CategoryModule {}