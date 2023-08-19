import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'db',
  username: 'root',
  password: 'root',
  database: 'lojavirtual',
  logging: false,
});

export default connection;
