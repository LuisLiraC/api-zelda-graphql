import { IResolvers } from "graphql-tools"
import { database } from "../../data/data.store"

export const charactersTypes: IResolvers = {
  Character: {
    games: parent => {
      const gamesList: Array<any> = []
      parent.games.map((gameId: number) => {
        gamesList.push(...database.games.filter(game => game.id === gameId))
      })
      return gamesList
    }
  }
}
