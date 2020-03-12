import { IRepository } from "../Interfaces/IRepository";
import { IEntityBase } from "../../DataModels/Interfaces/EntityBase/IEntityBase";
import { IInitializer } from "../Interfaces/IInitializer";
import { Initializer } from "./Initializer";
import { MikroORM, EntityManager, IDatabaseDriver, Connection } from "mikro-orm";

export class Repository<TEntity extends IEntityBase<any>> implements IRepository<TEntity>
{
    constructor() {
        this.InitializeDatabase();
    }
    Initializer: IInitializer<MikroORM<IDatabaseDriver<Connection>>> = new Initializer();
    entityManager: EntityManager;
    databaseManager: MikroORM<IDatabaseDriver<Connection>>;
    async InitializeDatabase() {
        try {
            var orm = await this.Initializer.InitializeDatabase();
            this.entityManager = orm.em;
            this.databaseManager = orm;
        }
        catch (e) {

        }
    }
    BeginTransaction(): void {
        try {
            // Bakýlacak
        } catch (e) {

        }
    }
    Commit(): void {
        try {
            
        } catch (e) {

        }
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
    // TODO :: OVERLOAD 
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