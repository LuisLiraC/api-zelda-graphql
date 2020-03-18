import { IResolvers } from "graphql-tools"
import { database } from "../data/data.store"

export const type: IResolvers = {
  Character: {
    games: parent => {
      const gamesList: Array<any> = []
      parent.games.map((gameId: number) => {
        gamesList.push(...database.games.filter(game => game.id === gameId))
      })
      return gamesList
    }
  },
  Game: {
    characters: parent => {
      const charactersList: Array<any> = []
      parent.characters.map((characterId: number) => {
        charactersList.push(...database.characters.filter(character => character.id === characterId))
      })
      return charactersList
    }
  }
}
