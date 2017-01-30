// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import uuid from 'node-uuid';

import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

import { UserType } from '../types';
import { log } from '../../../../config';

import { Users } from '../../';

// ────────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────────
// USER MUTATION

/**
 * Registers a new user profile
 * @param  {Sequelize.Model}   UserModel - the database model
 * @param  {GraphQLObjectType} UserType  - the user graph type
 * @return {Object}                      - the json result
 */
export default {
  type: UserType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (rootValue, args) => {
    // let user = _.extend(args, {
    //   password: Security.encrypt(args.password, process.env.BCRYPT_SALT),
    //   token:    uuid.v4()
    // });

    return Users.create({
      password: args.password,
      token: uuid.v4(),
    })
    .then((userRef) => {
      log.debug(`New User created: ${userRef.get('email')}`);
      return userRef;
    });
  },
};

// ────────────────────────────────────────────────────────────────────────────────
