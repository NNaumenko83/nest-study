import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'your_username',
    password: 'your_password',
    database: 'your_database',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true, // Set to false in production
};

export default typeOrmConfig;