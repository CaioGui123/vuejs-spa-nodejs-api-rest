import User from '../models/User';
import validate from '../validations/UserValidation';

export default {
  index: async (req, res) => {
    try {
      const users = await User.findAll();

      return res.json(users);
    } catch (e) {
      return res.status(404).json({
        message: 'Página não encontrada',
      });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      return res.json(user);
    } catch (e) {
      return res.status(404).json({
        message: 'Página não encontrada',
      });
    }
  },
  store: async (req, res) => {
    try {
      const data = req.body;

      await validate(data);

      const user = await User.create(data);

      res.status(201).json(user);
    } catch (e) {
      res.status(422).json(e);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      const user = await User.findByPk(id);

      await validate(data);

      const newUser = await user.update(data);

      return res.status(201).json(newUser);
    } catch (e) {
      return res.status(422).json(e);
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);

      await user.destroy();

      return res.json({
        message: 'Deletado com sucesso!',
      });
    } catch (e) {
      return res.status(404).json({
        message: 'Página não encontrada',
      });
    }
  },
};
