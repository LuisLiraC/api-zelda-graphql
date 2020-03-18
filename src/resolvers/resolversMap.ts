import { IResolvers } from "graphql-tools";
import { query } from "./query";
import { type } from './type'
import { mutations } from './mutations'


export const resolvers: IResolvers = {
  ...query,
  ...mutations,
  ...type
}