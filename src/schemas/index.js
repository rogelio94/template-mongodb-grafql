import exampleSchema from "./example";
import example2Schema from "./example2";
import { gql } from "apollo-server";

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, exampleSchema, example2Schema];
