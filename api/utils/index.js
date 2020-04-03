import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const jwtToken = {
  createToken({ id, email }) {
    return jwt.sign(
      { id, email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
  },
  verifyToken(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, { expiresIn: '24h' });
    return decoded;
  }
};
