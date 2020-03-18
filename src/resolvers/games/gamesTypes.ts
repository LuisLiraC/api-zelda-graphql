import { IResolvers } from "graphql-tools"
import { database } from "../../data/data.store"

export const gamesTypes: IResolvers = {
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
