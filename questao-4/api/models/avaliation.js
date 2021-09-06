const Sequelize = require('sequelize');
const database = require('../database');
const Client = require('./client');
 
const Avaliation = database.define('avaliation', {
    idCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    dataHorario: {
        type: Sequelize.DATE,
        allowNull: false,
        primaryKey: true,
    },
    nivel: {
        type: Sequelize.ENUM('excelente', 'razoavel', 'ruim'),
    },
});

Avaliation.belongsTo(Client, {foreignKey: 'idCliente', allowNull: false});

module.exports = Avaliation;
