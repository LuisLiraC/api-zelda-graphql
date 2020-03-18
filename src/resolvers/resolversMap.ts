import { IResolvers } from "graphql-tools"

import { charactersQueries } from "./characters/charactersQueries"
import { charactersMutations } from "./characters/charactersMutations"
import { charactersTypes } from './characters/charactersTypes'

import { gamesQueries } from "./games/gamesQueries"
import { gamesMutations } from "./games/gamesMutations"
import { gamesTypes } from './games/gamesTypes'

export const resolvers: IResolvers = {
  Query: {
    ...charactersQueries,
    ...gamesQueries
  },
  Mutation: {
    ...charactersMutations,
    ...gamesMutations
  },
  ...charactersTypes,
  ...gamesTypes
}