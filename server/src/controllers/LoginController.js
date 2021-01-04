import jwt from 'jsonwebtoken';
import User from '../models/User';
import validate from '../validations/LoginValidation';

function LoginException(message) {
  this.name = 'LoginException';
  this.message = message;
}

export default {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      await validate({ email, password });

      const user = await User.findOne({ where: { email } });

      if (!user || !(await user.passwordIsValid(password))) {
        res.status(401).json(new LoginException('Email ou senha não coincidem'));
      }

      const { id, name } = user;

      const token = jwt.sign({ id, name, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRES_IN,
      });

      return res.status(200).json({ token, user });
    } catch (e) {
      return res.status(422).json(e);
    }
  },
};
