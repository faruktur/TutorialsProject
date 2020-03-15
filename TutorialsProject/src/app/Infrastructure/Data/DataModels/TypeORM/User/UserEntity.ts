import { BaseEntity, Entity, Column } from "typeorm";

@Entity()
export class UserEntity extends BaseEntity{

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    email: string
}