'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pacientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apPaterno: {
        type: Sequelize.STRING
      },
      apMaterno: {
        type: Sequelize.STRING
      },
      ci: {
        type: Sequelize.STRING
      },
      fechNacimien: {
        type: Sequelize.DATE
      },
      sexo: {
        type: Sequelize.STRING
      },
      estadoCivil: {
        type: Sequelize.STRING
      },
      ocupacion: {
        type: Sequelize.STRING
      },
      depNacio: {
        type: Sequelize.STRING
      },
      munipNacio: {
        type: Sequelize.STRING
      },
      departVive: {
        type: Sequelize.STRING
      },
      municVive: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      zona: {
        type: Sequelize.STRING
      },
      respfamiliar: {
        type: Sequelize.STRING
      },
      nombreP: {
        type: Sequelize.STRING
      },
      nombreM: {
        type: Sequelize.STRING
      },
      telefonorRef: {
        type: Sequelize.INTEGER
      },
      lugTrabajo: {
        type: Sequelize.STRING
      },
      directrabajo: {
        type: Sequelize.STRING
      },
      telef: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pacientes');
  }
};