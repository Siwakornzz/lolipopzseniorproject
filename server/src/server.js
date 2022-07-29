import { ApolloServer } from "apollo-server-express";
import resolvers from "./resolvers/resolvers";
// import { typeDefs } from "./schema/typeDefs";
import fs from "fs";
import path from "path";
import getUser from "./utils/getUser";

const typeDefs = fs
  .readFileSync(path.join(__dirname, "./schema", "schema.graphql"), "utf8")
  .toString();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // check token from headers

    const token = req.headers.authorization || "";

    // extract userid from token

    const userId = getUser(token);
    console.log('userId from server file : ' , userId)

    // return userId is decoded
    return { userId };
  },
});

export default server;
