import { gql } from "apollo-server";

export default gql`
  type example2 {
    id: ID!
    name: String!
  }

  extend type Query {
    example2(id: ID!): Example2!
    example2: [Example2!]!
  }

  extend type Mutation {
    createExample2(name: String!): Example2!
  }
`;
