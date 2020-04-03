import models from '../models';

const { TodoItem } = models;

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
};

export default todoItems;
