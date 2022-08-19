'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.Posts, {
        foreignKey: "editor_id",
      });
      Users.belongsTo(models.Roles, {
        foreignKey: "role_id",
      });
    }
  }
  Users.init({
    name: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
    paranoid: true, /* Soft delete */
  });
  return Users;
};