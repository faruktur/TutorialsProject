import { IRepository } from "../Interfaces/IRepository";
import { IEntityBase } from "../../DataModels/Interfaces/EntityBase/IEntityBase";
import { IInitializer } from "../Interfaces/IInitializer";

export class Repository<TEntity extends IEntityBase<any>> implements IRepository<TEntity>
{
    Initializer: IInitializer;
    InitializeDatabase(): void {
        throw new Error("Method not implemented.");
    }
    BeginTransaction(): void {
        throw new Error("Method not implemented.");
    }
    Commit(): void {
        throw new Error("Method not implemented.");
    }
    DisposeTransaction(): void {
        throw new Error("Method not implemented.");
    }
    RollBack(): void {
        throw new Error("Method not implemented.");
    }
    Add(entity: TEntity): void {
        throw new Error("Method not implemented.");
    }
    AddBulk(entity: TEntity[]): void {
        throw new Error("Method not implemented.");
    }
    Update(id: string, entity: TEntity): void {
        throw new Error("Method not implemented.");
    }
    UpdateBulk(id: string, entity: TEntity): void {
        throw new Error("Method not implemented.");
    }
    Any(filter: any): boolean {
        throw new Error("Method not implemented.");
    }
    Count(): number {
        throw new Error("Method not implemented.");
    }
    Queryable() {
        throw new Error("Method not implemented.");
    }

    Find(predicate: any): TEntity {
        try {
            return null;
        } catch (e) {

        }
    }
    GetAll(predicate: any): TEntity[] {
        try {
            return null;
        } catch (e) {

        }
    }
     
     
    // TODO :: OVERLOAD 
    Delete(entity: any) {
        throw new Error("Method not implemented.");
    }
    HardDelete(key: any): void;
    HardDelete(entity: TEntity): void;
    HardDelete(entities: TEntity[]): void
    HardDelete(parameter: any) {
        try {
            return null;
        } catch (e) {

        }
    }
    SaveChanges(): number {
        throw new Error("Method not implemented.");
    }

}