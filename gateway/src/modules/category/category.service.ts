import { Injectable } from "@nestjs/common";
import { CategoryClient } from "./category.client";

@Injectable()
export class CategoryService{
    constructor(private categoryClient:CategoryClient){}

    getAllCategories(){
        return this.categoryClient.getAllCategories('salom')
    }

    createCategory(name:string){
        return this.categoryClient.createCategory(name)
    }

    updateCategory(name:string,id:number){
        return this.categoryClient.updateCategory(id,name)
    }
}