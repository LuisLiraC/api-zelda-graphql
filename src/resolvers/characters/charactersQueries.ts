import { database } from "../../data/data.store"

export const charactersQueries = {
  characters(): any {
    return database.characters
  },
  character(__: void, { id }: { id: number }): any {
    const [result] = database.characters.filter(ch => ch.id == id)
    if (!result) {
      return {
        id: -1,
        name: `Character not found with ID ${id}`,
        games: []
      }
    }
    return result
  }
}