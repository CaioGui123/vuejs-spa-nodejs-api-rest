module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('students', 'image', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async () => {},
};
