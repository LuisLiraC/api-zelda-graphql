import { database } from "../../data/data.store"

export const gamesMutations = {
  addGame(__: void, { game }: { game: any }): any {
    const GameItem = {
      id: database.games.length + 1,
      ...game
    }

    if (database.games.filter(g => g.title === GameItem.title).length === 0) {
      database.games.push(GameItem)
      return GameItem
    }

    return GameNotFoundOrAlreadyExists("The game already exists")
  },

  editGame(__: void, { game }: { game: any }): any {
    const GameExists = database.games.findIndex(g => g.id == game.id)
    if (GameExists > -1) {
      delete game.id
      database.games[GameExists] = {
        ...database.games[GameExists],
        ...game
      }
      return database.games[GameExists]
    }

    return GameNotFoundOrAlreadyExists("The game does not exist")
  },

  deleteGame(__: void, { id }: { id: number }) {
    const GameExists = database.games.findIndex(g => g.id == id)

    if (GameExists > -1) {
      const game = database.games[GameExists]
      database.games.splice(GameExists, 1)
      return game
    }

    return GameNotFoundOrAlreadyExists("The game does not exist")
  }

}

const GameNotFoundOrAlreadyExists = (title: string) => {
  return {
    id: -1,
    title,
    characters: []
  }
}
