'use strict';

/*===============================
=            MODULES            =
===============================*/

import gql from 'graphql-tag';

/*=====  End of MODULES  ======*/


/**
 * GraphQL Query to fetch a user object
 * @type {Object}
 */
exports.QUERY_GET_USER = {
  query: gql`
  query GetUser($token: String!, $id: Int) {
    user(token: $token, id: $id) { id, email, token, firstName, lastName }
  }`,
  variables: { token: token, id: userID }
};
