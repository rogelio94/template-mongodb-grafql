// graphQL wrapper
const { gql } = require("apollo-server");

module.exports = gql`
  type Example1 {
    id: ID
    name: String
  }
`;
