'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('USERS', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      token: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
      },
      salt: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:  {
          isUUID: 4,
        }
      },
      firstName: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: true,
      },
      lastName: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: true,
      },
      createdAt: {
        type:         Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull:    false,
      },
      updatedAt: {
        type:         Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull:    false,
      },
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('USERS');
  }
};
