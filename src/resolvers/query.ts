import { IResolvers } from "graphql-tools"

const query: IResolvers = {
  Query: {
    hello(): String {
      return 'Hello World'
    },
    helloWithName(_: void, { name }): String {
      return `Hello ${name}`
    }
  }
}

export default query