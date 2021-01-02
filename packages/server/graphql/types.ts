import { Context, GraphQLResponse } from 'apollo-server-core'
import { IResolvers } from 'graphql-tools'

export interface GraphQLContext extends Context {
  req: any
  res: GraphQLResponse
}

export type GraphQLResolvers = IResolvers<any, GraphQLContext>
