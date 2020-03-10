import { IEntityBase } from "../Interfaces/EntityBase/IEntityBase";

export class BaseEntity<TKeyType> implements IEntityBase<TKeyType>{
    Id: TKeyType;
    CreatedAt: number;
    UpdatedAt: number;
    CreatedUser: TKeyType;
    UpdatedUser: TKeyType;
}