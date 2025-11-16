'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Tarea,{
        foreignKey: 'userId',
        as: 'Tareas',
        onDelete: 'CASCADE'
      })
    }
  }
  User.init({
    userName: {type: DataTypes.STRING, allowNull: false, unique: true},
    firstName: {type: DataTypes.STRING, allowNull: false},
    lastName: {type: DataTypes.STRING, allowNull: false},
    fechaDeNac: {type: DataTypes.DATEONLY, allowNull: false},
    edad: {
      type: new DataTypes.VIRTUAL(DataTypes.NUMBER, ['fechaDeNac']),
      get: function(){
        return Math.floor( (new Date() - new Date(this.get('fechaDeNac'))) / (1000*60*60*24*365.25) ) 
      }
    },
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type:DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};