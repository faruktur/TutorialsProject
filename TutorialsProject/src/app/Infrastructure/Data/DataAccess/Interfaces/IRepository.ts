import { IEntityBase } from "../../DataModels/Interfaces/EntityBase/IEntityBase";
import { IInitializer } from "./IInitializer";

export interface IRepository<TEntity extends IEntityBase<any>> {

    Initializer: IInitializer;
    InitializeDatabase(): void;

    BeginTransaction(): void
    Commit(): void;
    DisposeTransaction(): void;
    RollBack(): void;



    Add(entity: TEntity): void
    AddBulk(entity: TEntity[]): void

    Update(id: string, entity: TEntity): void
    UpdateBulk(id: string, entity: TEntity): void

    Any(filter): boolean;
    Count(): number;

    // Var mý yok mu araþtýrýlacak

    //IncludeMultiple(includes);
    Queryable(): any;

    GetAll(currentPage, pageSize): TEntity[];
    GetAll(predicate): TEntity[];

    Find(id: any): TEntity;
    Find(predicate: any): TEntity;

    Delete(id): void;
    Delete(entity): void;

    HardDelete(id: any): void;
    HardDelete(entity: TEntity): void;
    HardDelete(entities: TEntity[]): void;

    SaveChanges(): number;




}