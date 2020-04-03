import models from '../models';

const { TodoItem, Todo } = models;

const todoItems = {
  async create(req, res, next) {
    try {
      const { text, todoId } = req.body;
      // Validation
      if (!text) { return res.status(400).send({ error: 'Text is required' }); }
      if (!todoId) { return res.status(400).send({ error: 'todoId is required' }); }
      const item = await TodoItem.create({ text, todoId });
      return res.status(201).send(item);
    } catch (e) {
      return next(new Error(e));
    }
  },
  async fetchAll(req, res, next) {
    try {
      const { todoId } = req.params;
      // Validation
      if (!todoId) { return res.status(400).send({ error: 'todoId is required' }); }
      const items = await TodoItem.findAll({
        where: { todoId },
        include: [{
          model: Todo,
          as: 'todo'
        }],
      });
      return res.status(200).send(items);
    } catch (e) {
      return next(new Error(e));
    }
  },
  async fetchOne(req, res, next) {
    try {
      const { todoItemId } = req.params;
      // Validation
      if (!todoItemId) { return res.status(400).send({ error: 'todoItemId is required' }); }
      const items = await TodoItem.findOne({
        where: { id: todoItemId },
        include: [{
          model: Todo,
          as: 'todo'
        }],
      });
      return res.status(200).send(items);
    } catch (e) {
      return next(new Error(e));
    }
  },
};

export default todoItems;
