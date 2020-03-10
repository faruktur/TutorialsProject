import { MikroORM } from 'mikro-orm';
import { IInitializer } from '../Interfaces/IInitializer';
import settings from './settings.json';


export class Initializer implements IInitializer {

	async InitializeDatabase() {
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
			console.log(orm.em);
		} catch (e) {

		}
	}
}