'use strict';
module.exports = (sequelize, DataTypes) => {
  const pacientes = sequelize.define('pacientes', {
    nombre: DataTypes.STRING,
    apPaterno: DataTypes.STRING,
    apMaterno: DataTypes.STRING,
    ci: DataTypes.STRING,
    fechNacimien: DataTypes.DATE,
    sexo: DataTypes.STRING,
    estadoCivil: DataTypes.STRING,
    ocupacion: DataTypes.STRING,
    depNacio: DataTypes.STRING,
    munipNacio: DataTypes.STRING,
    departVive: DataTypes.STRING,
    municVive: DataTypes.STRING,
    direccion: DataTypes.STRING,
    zona: DataTypes.STRING,
    respfamiliar: DataTypes.STRING,
    nombreP: DataTypes.STRING,
    nombreM: DataTypes.STRING,
    telefonorRef: DataTypes.INTEGER,
    lugTrabajo: DataTypes.STRING,
    directrabajo: DataTypes.STRING,
    telef: DataTypes.INTEGER
  }, {});
  pacientes.associate = function(models) {
    // associations can be defined here
  };
  return pacientes;
};