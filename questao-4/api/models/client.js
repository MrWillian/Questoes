const Sequelize = require('sequelize');
const database = require('../database');
 
const Client = database.define('client', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nascimento: {
        type: Sequelize.DATE,
    },
    sexo: {
        type: Sequelize.ENUM('M', 'F'),
    },
});

module.exports = Client;
