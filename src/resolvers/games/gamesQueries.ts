import { database } from "../../data/data.store"

export const gamesQueries = {
  games(): any {
    return database.games
  },
  game(__: void, { id }: { id: number }): any {
    const [result] = database.games.filter(g => g.id == id)
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