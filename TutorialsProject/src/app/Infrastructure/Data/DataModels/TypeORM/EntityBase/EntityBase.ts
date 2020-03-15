import { IEntityBase } from "../../Interfaces/EntityBase/IEntityBase";
import {PrimaryColumn, Column } from "typeorm";

export abstract class EntityBase implements IEntityBase<string> {


    @PrimaryColumn({
        generated: "uuid"
    })
    Id: string;
    @Column()
    CreatedAt: number;
    @Column()
    UpdatedAt: number;
    @Column()
    CreatedUser: string;
    @Column()
    UpdatedUser: string;

}


