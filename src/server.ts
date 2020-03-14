import express from 'express'
import compression from 'compression'
import cors from 'cors'
import schema from './schema'
import { ApolloServer } from 'apollo-server-express'
const app = express()

app.use(cors())
app.use(compression())

const server = new ApolloServer({
  schema,
  introspection: true
})

server.applyMiddleware({ app })

app.listen(3000, () => {
  console.log(`Server listen on http://localhost:3000/graphql`)
})