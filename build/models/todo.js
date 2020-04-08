"use strict";

module.exports = function (sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});

  Todo.associate = function (models) {
    // associations can be defined here
    Todo.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });
    Todo.hasMany(models.TodoItem, {
      as: 'todoItems',
      foreignKey: 'todoId'
    });
  };

  return Todo;
};