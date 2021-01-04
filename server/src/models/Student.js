import Sequelize, { Model } from 'sequelize';

import app from '../config/app';

export default class Student extends Model {
  static init(sequelize) {
    super.init({
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      email: Sequelize.STRING,
      age: Sequelize.INTEGER,
      weight: Sequelize.FLOAT,
      height: Sequelize.FLOAT,
      image: {
        type: Sequelize.STRING,
        get() {
          return `${app.url}/images/${this.getDataValue('image')}`;
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
