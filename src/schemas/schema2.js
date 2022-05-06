// graphQL wrapper
const { gql } = require("apollo-server");

module.exports = gql`
  type Example2 {
    id: ID
    name: String
  }
`;
