import { ApolloServer } from "apollo-server-micro";
import schema from "backend/schema";
import { context } from "backend/context";

export const server = new ApolloServer({
  schema,
  context,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({
  path: "/api/graphql",
});
