/* eslint-disable consistent-return */
import validator from 'validator';
import models from '../models';

const { User } = models;


export default async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!email) {
    return res.status(400).send({ error: 'email is required' });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).send({ error: 'invalid email address' });
  }
  if (!name) {
    return res.status(400).send({ error: 'name is required' });
  }
  if (!password) {
    return res.status(400).send({ error: 'password is required' });
  }
  const user = await User.findOne({ where: { email } });
  if (user) {
    return res.status(409).send({ error: 'user exist already' });
  }
  next();
};
