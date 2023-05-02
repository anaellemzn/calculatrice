import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {Erreur} from '../erreur/erreur.entity'
import {Succes} from '../succes/succes.entity'

export const typeOrmConfig: TypeOrmModuleOptions = {
type: 'mysql',
host: 'localhost',
username: 'user',
password: 'user',
database: 'calculatrice',
entities: [Erreur,Succes],
};