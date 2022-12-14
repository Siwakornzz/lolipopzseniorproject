import { gql } from "apollo-server-express"

const typeDefs = gql`
  type Query {
    me: User!
    user(id: ID!): User
    users: [User]!
  }
  type User {
    id: ID!
    username: String!
  }
`

export default typeDefs