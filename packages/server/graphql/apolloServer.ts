import {ApolloServer} from "apollo-server-micro";
import schema from "server/graphql/schema";

export default new ApolloServer({
  schema,
})