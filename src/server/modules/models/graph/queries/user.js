// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import {
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} from 'graphql';

import { log } from '../../../../config';

import { Users } from '../../';
import Type from '../types/user';

// ────────────────────────────────────────────────────────────────────────────────

// ────────────────────────────────────────────────────────────────────────────────
// USER QUERY

const findUser = (rootValue, args) => {
  return Users.findOne({
    where: { id: args.id },
  }).then((userRef) => {
    log.info(userRef);
    if (userRef) {
      log.debug(`Found User # ${userRef.get('id')}`);
      // Prevent exposing token to other users
      userRef.token = '';
      return userRef.toJSON();
    } else {
      return new Error('Failed to locate the user');
    }
  });
};

/**
 * Retrieves the user object
 * @param  {Sequelize.Model}   UserModel - the database model
 * @param  {GraphQLObjectType} UserType  - the user graph type
 * @return {Object}                      - the json result
 */
export default {
  type: Type,
  args: {
    id: {
      type: GraphQLInt,
      description: 'id of the user',
    },
    token: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'jwt token of the user',
    },
  },
  resolve: findUser,
};

// ────────────────────────────────────────────────────────────────────────────────

