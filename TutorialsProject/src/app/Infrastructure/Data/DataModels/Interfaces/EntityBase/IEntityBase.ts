export interface IEntityBase<TKeyType> {
    Id: TKeyType;
    CreatedAt: number;
    UpdatedAt: number;
    CreatedUser: TKeyType;
    UpdatedUser: TKeyType;
}