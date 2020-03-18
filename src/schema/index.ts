import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import 'graphql-import-node'
import dummySchema from './schema.graphql'
import charactersTypes from './characters.graphql'
import gamesTypes from './games.graphql'
import { resolvers } from '../resolvers/resolversMap'

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [
    dummySchema,
    charactersTypes,
    gamesTypes
  ],
  resolvers
})

export default schema