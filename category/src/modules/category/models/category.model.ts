import { DataTypes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";

@Table({
    tableName:'category',
    timestamps:true
})
export class Category extends Model{

    @Column({
        type : DataTypes.STRING,
        allowNull:false
    })
    name : string;

}