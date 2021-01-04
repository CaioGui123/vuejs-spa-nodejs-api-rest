const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Caio',
        email: 'caio@gmail.com',
        password: await bcryptjs.hash('12345678', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Eduardo',
        email: 'eduardo@gmail.com',
        password: await bcryptjs.hash('12345678', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Maria',
        email: 'maria@gmail.com',
        password: await bcryptjs.hash('12345678', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Sophia',
        email: 'sophia@gmail.com',
        password: await bcryptjs.hash('12345678', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  down: async () => {
  },
};
