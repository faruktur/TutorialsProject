export interface IInitializer<TDatabaseManager> {

    InitializeDatabase(): Promise<TDatabaseManager>;
}