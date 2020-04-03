/* eslint-disable import/prefer-default-export */
import auth from '../controllers/authController';

export const routes = (app) => {
  app.get('/', (req, res) => res.send({ message: 'Welcome to Todo API' }));

  app.post('/api/auth/sign_up', auth.signUp);
};
