import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'
import { AuthorType } from './author.type'
import { authors } from './db'

export const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: {
      type: GraphQLID
    },
    title: {
      type: GraphQLString
    },
    date: {
      type: GraphQLString
    },
    author: {
      type: AuthorType,
      resolve(params) {
        return authors.find(a => a.id === params.author)
      }
    }
  }
})
