// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

// ────────────────────────────────────────────────────────────────────────────────

import queries from './queries';
import mutations from './mutations';

const queryConfig = {
  name: 'RootQueryObjectType',
  fields: queries,
};

const mutationConfig = {
  name: 'RootMutationObjectType',
  fields: mutations,
};

export default (new GraphQLSchema({
  query: new GraphQLObjectType(queryConfig),
  mutation: new GraphQLObjectType(mutationConfig),
}));
