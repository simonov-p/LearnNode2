const Sequlize = require('sequelize');


const DB_NAME = 'node-todo';
const USER_NAME = 'root';
const PASSWORD = 'chicago';
const sequlize = new Sequlize(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequlize;