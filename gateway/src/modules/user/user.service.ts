import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class UserService implements OnModuleInit {
  private client:ClientProxy;

  constructor(){
    this.client = ClientProxyFactory.create({
      transport:Transport.TCP,
      options:{
        host:'localhost',
        port:3003
      }
    })
  }

  async onModuleInit(){
    await this.client.connect()
  }

  getAllUsers(){
    return this.client.send('findAllUser','')
  }

  createUser(payload:CreateUserDto){
    return this.client.send('createUser',payload)
  }

  getUserById(id:number){
    return this.client.send('findOneUser',id)
  }

  updateUser(id:number,payload:UpdateUserDto){
    return this.client.send('updateUser',{
      ...payload,
      id
    })
  }

  deleteUser(id:number){
    return this.client.send('removeUser',id)
  }
}
