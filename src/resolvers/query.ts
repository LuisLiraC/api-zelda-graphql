import { IResolvers } from "graphql-tools"
import { database } from "../data/data.store"

const query: IResolvers = {
  Query: {
    characters(): any {
      return database.characters
    },
    character(__: void, { id }): any {
      const [result] = database.characters.filter(ch => ch.id === parseInt(id))
      if (!result) {
        return {
          id: -1,
          name: `Character not found with ID ${id}`,
          games: []
        }
      }
      return result
    },
    games(): any {
      return database.games
    },
    game(__: void, { id }): any {
      const [result] = database.games.filter(g => g.id === parseInt(id))
      if (!result) {
        return {
          id: -1,
          title: `Game not found with ID ${id}`,
          characters: []
        }
      }
      return result
    }
  }
}

export default query