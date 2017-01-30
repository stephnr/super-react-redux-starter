// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import _ from 'lodash';
import Sequelize from 'sequelize';
import gqlCustom from 'graphql-custom-types';
import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql';
import gsql from 'graphql-sequelize';

import { Users } from '../../';

// ────────────────────────────────────────────────────────────────────────────────

gsql.typeMapper.mapType((type) => {
  if (type instanceof Sequelize.BIGINT) {
    return GraphQLInt;
  } else if (type instanceof Sequelize.DATE) {
    return gqlCustom.GraphQLDateTime;
  } else {
    return GraphQLString;
  }
});

export default new GraphQLObjectType({
  name: 'USER',
  description: 'A user',
  fields: gsql.attributeFields(Users, {
    // exclude:   ['password', 'createdAt', 'updatedAt']
  }),
});
