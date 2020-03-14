import express from 'express'
import compression from 'compression'
import cors from 'cors'
import express_graphql from 'express-graphql'
import schema from './schema'
const app = express()

app.use(cors())
app.use(compression())

app.use('/', express_graphql({
  schema,
  graphiql: true
}))

app.listen(3000, () => {
  console.log(`Server listen on http://localhost:3000/graphql`)
})