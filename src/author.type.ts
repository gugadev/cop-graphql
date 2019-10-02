import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

export const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: {
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    }
  }
})
