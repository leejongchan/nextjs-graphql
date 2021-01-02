import {loadFilesSync, makeExecutableSchema, mergeResolvers, mergeTypeDefs} from "graphql-tools";
import path from "path";
import {userResolver} from "server/graphql/user/user.resolver";

export default makeExecutableSchema({
  typeDefs: mergeTypeDefs(loadFilesSync(path.join(__dirname, './**/*.gql'))),
  resolvers: mergeResolvers([userResolver]),
})