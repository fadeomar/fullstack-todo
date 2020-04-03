import models from '../models';

const { Todo, TodoItem } = models;

const todos = {
  async create({ body, decoded }, res, next) {
    try {
      const { title } = body;
      const { userId } = decoded;
      const todo = await Todo.create({ title, userId });
      return res.status(201).send(todo);
    } catch (e) {
      return next(new Error(e));
    }
  },
  async fetchAll({ decoded }, res, next) {
    try {
      const myTodos = await Todo.findAll({
        where: { userId: decoded.userId },
        include: [{
          model: TodoItem,
          as: 'todoItems'
        }],
      });
      return res.status(200).send(myTodos);
    } catch (e) {
      return next(new Error(e));
    }
  },
  async fetchOne({ params, decoded }, res, next) {
    try {
      const myTodo = await Todo.findOne({
        where: { id: params.todoId, userId: decoded.userId },
        include: [{
          model: TodoItem,
          as: 'todoItems'
        }],
      });
      if (!myTodo) {
        return res.status(404).send({ error: 'Todo not found' });
      }
      return res.status(200).send(myTodo);
    } catch (e) {
      return next(new Error(e));
    }
  },
};

export default todos;
