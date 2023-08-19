import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: '',
  logging: false,
});

export default connection;
