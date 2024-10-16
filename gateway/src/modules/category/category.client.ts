import { Injectable, OnModuleInit } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";

@Injectable()
export class CategoryClient implements OnModuleInit{
    private client : ClientProxy;
    constructor(){
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options : {
                host : 'localhost',
                port : 3001
              }
        })
    }

    async  onModuleInit(){
        await this.client.connect()
    }

    getAllCategories(data:any){
        return this.client.send('getAllCategories',data)
    }

    createCategory(name:string){
        return this.client.send('createCategory',{name})
    }

    updateCategory(id:number,name:string){
        return this.client.send('updatecategory',{
            id,
            name
        })
    }
}