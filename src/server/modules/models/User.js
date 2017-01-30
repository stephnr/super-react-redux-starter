// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import sequelize from 'sequelize';
import { log } from '../../config';

// ────────────────────────────────────────────────────────────────────────────────


export default (Sequelize) => {
  const tablename = 'USERS';

  return Sequelize.define(tablename, {
    id: {
      primaryKey: true,
      type: sequelize.BIGINT,
      autoIncrement: true,
    },
    email: {
      type: sequelize.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
    token: {
      type: sequelize.UUID,
      allowNull: false,
      unique: true,
    },
    salt: {
      type: sequelize.STRING,
      allowNull: false,
      validate: {
        isUUID: 4,
      },
    },
    firstName: {
      type: sequelize.STRING,
      defaultValue: '',
      allowNull: true,
    },
    lastName: {
      type: sequelize.STRING,
      defaultValue: '',
      allowNull: true,
    },
    createdAt: {
      type: sequelize.DATE,
      defaultValue: sequelize.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: sequelize.DATE,
      defaultValue: sequelize.NOW,
      allowNull: false,
    },
  }, {
    timestamps: true,
  }).addHook('afterCreate', 'postCreate', (user) => {
    log.info(user);
  });
};
