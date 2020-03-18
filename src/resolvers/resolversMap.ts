import { IResolvers } from "graphql-tools";
import query from "./query";
import type from './type'
import gamesMutations from './gamesMutations'
import charactersMutations from './charactersMutations'


const resolvers: IResolvers = {
  ...query,
  ...gamesMutations,
  ...charactersMutations,
  ...type
}

export default resolvers