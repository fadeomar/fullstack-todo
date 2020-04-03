/* eslint-disable no-unused-vars */
import regeneratorRuntime from 'regenerator-runtime';
import models from '../models';

import { hashPassword, jwtToken, comparePassword } from '../utils';

const { User } = models;

const auth = {
  async signUp(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const hash = hashPassword(password);
      const user = await User.create({ name, email, password: hash });
      const token = jwtToken.createToken(user);
      const { id } = user;
      return res.status(201).send({ token, user: { id, name, email } });
    } catch (e) {
      return next(new Error(e));
    }
  }
};

export default auth;
