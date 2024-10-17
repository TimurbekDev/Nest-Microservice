import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    full_name:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password:string;
}
