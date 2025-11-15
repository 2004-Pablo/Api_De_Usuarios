'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tarea.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'usuario'
      });
    }
  }
  Tarea.init({
    name: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'Tarea',
  });
  return Tarea;
};