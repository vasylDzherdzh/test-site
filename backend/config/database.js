import { Sequelize } from 'sequelize';
 
const db = new Sequelize('b406', 'root', 'usbw', {
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;
