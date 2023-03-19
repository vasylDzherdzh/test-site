import { Sequelize } from "sequelize";

const db = new Sequelize('myshop','root', 'usbw', {
    host: "localhost",
    dialect: "mysql"
});


export default db;