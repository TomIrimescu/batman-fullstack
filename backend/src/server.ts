import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './schema'
import { context } from './context'
const cors = require('cors');

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 
}

const app = express()
app.use(cors(corsOptions));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context: context,
    graphiql: true,
  }),
)

app.listen(4000)
console.log(`\
🚀 Server ready at: http://localhost:4000/graphql
`)