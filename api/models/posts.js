'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    static associate(models) {
      Posts.belongsTo(models.Users, {
        foreignKey: "editor_id",
      });
    }
  }
  Posts.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};