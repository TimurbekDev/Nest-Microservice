import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository:Repository<User>
  ){}
  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({where:{id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id,{
      full_name:updateUserDto.full_name,
      email:updateUserDto.email,
      password:updateUserDto.password
    });
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
