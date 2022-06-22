import * as dotenv from 'dotenv';
import * as config from "config";
import * as path from "path";
import {TypeOrmModuleOptions} from "@nestjs/typeorm";

dotenv.config({
    path: path.resolve((process.env.NODE_ENV === 'local') ? '.env.local' : '.env.development')
});

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: dbConfig.type,
    host: process.env.RDS_HOSTNAME || dbConfig.host,
    port: process.env.RDS_PORT || dbConfig.port,
    username: process.env.RDS_USERNAME || dbConfig.username,
    password: process.env.RDS_PASSWORD || dbConfig.password,
    database: process.env.RDS_DB_NAME || dbConfig.database,
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
    synchronize: dbConfig.synchronize,
}
