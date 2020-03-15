import { createConnection, Connection } from "typeorm";
import settings from './settings.json';
export class DBConnectionManager {

    private static connection: Connection=null;
    private static _settings = settings.Database.PostgreSQL;
    
 
    static async GetConnection() {
        if (this.connection===null && !this.connection.isConnected)
            this.connection = await createConnection({
                type: "mysql",
                host: this._settings.host,
                port: this._settings.port,
                username: this._settings.username,
                password: this._settings.password,
                database: this._settings.databasename,
                logging: true
            });
        return this.connection
    }


}