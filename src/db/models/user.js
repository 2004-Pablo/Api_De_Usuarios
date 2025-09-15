'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    userName: {type: DataTypes.STRING, allowNull: false, unique: true},
    email: DataTypes.STRING,
    fechaDeNac: DataTypes.DATEONLY,
    edad: {
      type: new DataTypes.VIRTUAL(DataTypes.NUMBER, ['fechaDeNac']),
      get: function(){
        return Math.floor( (new Date() - new Date(this.get('fechaDeNac'))) / (1000*60*60*24*365.25) ) 
      }
    }
  }, {
    sequelize,
    modelName: 'user',
    timestamps: false
  });
  return user;
};