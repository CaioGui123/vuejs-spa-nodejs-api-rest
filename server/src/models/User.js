import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.INTEGER,
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => {
      user.password = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password);
  }
}
