import Student from '../models/Student';
import validate from '../validations/StudentValidation';

export default {
  index: async (req, res) => {
    try {
      const students = await Student.findAll({
        attributes: ['id', 'first_name', 'last_name', 'email', 'age', 'weight', 'height', 'image'],
        order: [
          ['id', 'DESC'],
        ],
      });

      return res.json(students);
    } catch (e) {
      return res.status(404).json({
        message: 'Página não encontrada',
      });
    }
  },
  show: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await Student.findByPk(id);

      return res.json(student);
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

      data.image = req.file.filename;

      const student = await Student.create(data);

      return res.status(201).json(student);
    } catch (e) {
      return res.status(422).json(e);
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;

      const student = await Student.findByPk(id);

      await validate(data);

      const newStudent = await student.update(data);

      return res.status(201).json(newStudent);
    } catch (e) {
      return res.status(422).json(e);
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const student = await Student.findByPk(id);

      await student.destroy();

      return res.json({
        message: 'Deletado com sucesso!',
      });
    } catch (e) {
      return res.status(400).json({
        message: 'Página não encontrada',
      });
    }
  },
};
