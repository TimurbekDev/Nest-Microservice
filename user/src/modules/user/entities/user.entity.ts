import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "user",
})
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    full_name:string;

    @Column()
    email:string;

    @Column()
    password:string;
}