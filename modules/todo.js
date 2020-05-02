const Sequlize = require('sequelize');
const sequlize = require(../utils/database);

const todo = sequlize.define('Todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequlize.INTEGER
    },
    done: {
        type: Sequlize.BOOLEAN,
        allowNull: false
    },
    title: {
        type: Sequlize.STRING,
        allowNull: false
    },
    data:{
        type: Sequlize.DATE,
        allowNull: false
    }
});

module.exports = todo;