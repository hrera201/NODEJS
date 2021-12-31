'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.hasOne(models.Department,{foreignKey:'id'})
    }
  };
  Employee.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    pass: DataTypes.STRING,
    company: DataTypes.STRING,
    depID:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};