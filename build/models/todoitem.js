"use strict";

module.exports = function (sequelize, DataTypes) {
  var TodoItem = sequelize.define('TodoItem', {
    text: DataTypes.STRING,
    todoId: DataTypes.INTEGER,
    isCompleted: DataTypes.BOOLEAN
  }, {});

  TodoItem.associate = function (models) {
    // associations can be defined here
    TodoItem.belongsTo(models.Todo, {
      as: 'todo',
      foreignKey: 'todoId'
    });
  };

  return TodoItem;
};