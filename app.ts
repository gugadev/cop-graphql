import * as express from 'express'
import * as http from 'express-graphql'
import { GraphQLSchema } from "graphql";
import { RootQuery } from "./src/query.type";
import { RootMutation } from "./src/mutation.type";

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})

const app = express()
app.use('/graphql', http({
  schema,
  graphiql: true
}))

app.listen(9999)