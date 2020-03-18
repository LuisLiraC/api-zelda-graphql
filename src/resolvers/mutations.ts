import { IResolvers } from "graphql-tools"
import { database } from "../data/data.store"

export const mutations: IResolvers = {
  Mutation: {
    addGame(__: void, { game }): any {
      const GameItem = {
        id: database.games.length + 1,
        ...game
      }


      if(database.games.filter(g => g.title === GameItem.title).length === 0) {
        database.games.push(GameItem)
        return GameItem
      }

      return GameNotFoundOrAlreadyExists("The game already exists")
    },
    editGame(__: void, { game }): any {
      const GameExists = database.games.findIndex(g => g.id == game.id)
      if(GameExists > -1) {
        delete game.id
        database.games[GameExists] = {
          ...database.games[GameExists],
          ...game
        }
        return database.games[GameExists]
      }

      return GameNotFoundOrAlreadyExists("The game does not exist")
    },
    deleteGame(__: void, { id }) {
      const GameExists = database.games.findIndex(g => g.id == id)

      if(GameExists > -1) {
        const game = database.games[GameExists]
        database.games.splice(GameExists, 1)
        return game
      }

      return GameNotFoundOrAlreadyExists("The game does not exist")
    },
    addCharacter(__: void, { character }): any {
      const characterItem = {
        id: database.characters.length + 1,
        ...character
      }

      if(database.characters.filter(c => c.name === characterItem.name).length === 0) {
        database.characters.push(characterItem)
        return characterItem
      }

      return CharacterNotFoundOrAlreadyExists("The character already exists")
    },
    editCharacter(__: void, { character }): any {
      const characterExists = database.characters.findIndex(c => c.id == character.id)
      if(characterExists > -1) {
        delete character.id
        database.characters[characterExists] = {
          ...database.characters[characterExists],
          ...character
        }
        return database.characters[characterExists]
      }

      return CharacterNotFoundOrAlreadyExists("The character does not exist")
    },
    deleteCharacter(__: void, { id }) {
      const characterExists = database.characters.findIndex(c => c.id == id)

      if(characterExists > -1) {
        const character = database.characters[characterExists]
        database.characters.splice(characterExists, 1)
        return character
      }

      return CharacterNotFoundOrAlreadyExists("The character does not exist")
    }
  }
}

const CharacterNotFoundOrAlreadyExists = (name: string) => {
  return {
    id: -1,
    name,
    games: []
  }
}


const GameNotFoundOrAlreadyExists = (title: string) => {
  return {
    id: -1,
    title,
    characters: []
  }
}
