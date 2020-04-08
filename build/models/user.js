"use strict";

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Todo, {
      as: 'todos',
      foreignKey: 'userId'
    });
  };

  return User;
};