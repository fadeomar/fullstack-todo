/* eslint-disable import/prefer-default-export */
import auth from '../controllers/authController';
import todos from '../controllers/todosController';
import validateAuth from '../middlewares/auth';
import authorize from '../middlewares/authorize';
import todoItems from '../controllers/todoItemsController';

export const routes = (app) => {
  app.get('/', (req, res) => res.send({ message: 'Welcome to Todo API' }));

  app.post('/api/auth/sign_up', validateAuth, auth.signUp);
  app.post('/api/auth/sign_in', auth.signIn);

  app.post('/api/todos', authorize, todos.create);
  app.get('/api/todos', authorize, todos.fetchAll);
  app.get('/api/todos/:todoId', authorize, todos.fetchOne);
  app.put('/api/todos/:todoId', authorize, todos.update);
  app.delete('/api/todos/:todoId', authorize, todos.delete);

  app.post('/api/todoItems', todoItems.create);
  app.get('/api/todos/:todoId/todoItems', todoItems.fetchAll);
  app.get('/api/todoItems/:todoItemId', todoItems.fetchOne);
  app.put('/api/todoItems/:todoItemId', todoItems.update);
  app.delete('/api/todoItems/:todoItemId', todoItems.delete);
};
