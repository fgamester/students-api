require('dotenv').config();
const { DataSource } = require('typeorm');

const dataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [
    __dirname + '/src/**/*.entity{.ts,.js}',
  ],
  migrations: [
    __dirname + '/src/migration/*{.ts,.js}',
  ],
  synchronize: false,
  logging: false,
};

const AppDataSource = new DataSource(dataSourceOptions);

module.exports = { AppDataSource };