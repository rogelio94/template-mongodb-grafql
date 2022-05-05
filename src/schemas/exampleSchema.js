import { gql } from "apollo-server";

export default gql`
  type example {
    id: ID!
    name: String!
  }

  extend type Query {
    example(id: ID!): Example!
    example: [Example!]!
  }

  extend type Mutation {
    createExample(name: String!): Example!
  }
`;
