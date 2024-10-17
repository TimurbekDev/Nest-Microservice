import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    @IsOptional()
    @IsString()
    full_name?:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email?:string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    password?:string;
}
