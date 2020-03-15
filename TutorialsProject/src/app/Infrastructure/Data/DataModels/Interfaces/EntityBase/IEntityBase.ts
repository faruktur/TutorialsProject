export interface IEntityBase<TKeyType extends number | string> {
    Id: TKeyType;
    CreatedAt: number;
    UpdatedAt: number;
    CreatedUser: TKeyType;
    UpdatedUser: TKeyType;
}