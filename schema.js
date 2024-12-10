const { gql } = require('@apollo/server');

const typeDefs = gql`
  type Query {
    hello: String
    printName(name: String!): String
  }
`;

module.exports = typeDefs;
