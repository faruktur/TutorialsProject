import { MikroORM, IDatabaseDriver, Connection } from 'mikro-orm';
import { IInitializer } from '../Interfaces/IInitializer';
import settings from './settings.json';


export class Initializer implements IInitializer<MikroORM<IDatabaseDriver<Connection>>> {

	async InitializeDatabase(): Promise<MikroORM<IDatabaseDriver<Connection>>> {
		try {
			const orm = await MikroORM.init({
				// TODO Settingsten alýnacak
				entities: [],
				entitiesDirsTs: ['./src/'],
				entitiesDirs: [],
				dbName: 'TutorialsProjectDatabase',
				baseDir: __dirname, // defaults to `process.cwd()`
				autoFlush: false, // read more here: https://mikro-orm.io/unit-of-work/
			})
			return orm;
		} catch (e) {

		}
	}
}