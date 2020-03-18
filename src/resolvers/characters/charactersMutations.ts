import { database } from "../../data/data.store"

export const charactersMutations = {
  addCharacter(__: void, { character }: { character: any }): any {
    const characterItem = {
      id: database.characters.length + 1,
      ...character
    }

    if (database.characters.filter(c => c.name === characterItem.name).length === 0) {
      database.characters.push(characterItem)
      return characterItem
    }

    return CharacterNotFoundOrAlreadyExists("The character already exists")
  },
  
  editCharacter(__: void, { character }: { character: any }): any {
    const characterExists = database.characters.findIndex(c => c.id == character.id)
    if (characterExists > -1) {
      delete character.id
      database.characters[characterExists] = {
        ...database.characters[characterExists],
        ...character
      }
      return database.characters[characterExists]
    }

    return CharacterNotFoundOrAlreadyExists("The character does not exist")
  },

  deleteCharacter(__: void, { id }: { id: number }) {
    const characterExists = database.characters.findIndex(c => c.id == id)

    if (characterExists > -1) {
      const character = database.characters[characterExists]
      database.characters.splice(characterExists, 1)
      return character
    }

    return CharacterNotFoundOrAlreadyExists("The character does not exist")
  }
}

const CharacterNotFoundOrAlreadyExists = (name: string) => {
  return {
    id: -1,
    name,
    games: []
  }
}