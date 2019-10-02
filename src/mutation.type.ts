import { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLInt } from 'graphql'
import { authors, posts } from './db';
import { PostType } from './post.type';
import { AuthorType } from './author.type';

export const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    createAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) }
      },
      resolve(_, author: any) {
        const lastId = authors.reduce((acc, cur) =>  cur.id > acc ? cur.id : acc, 0)
        author.id = lastId + 1
        authors.push(author)
        return author
      }
    },
    createPost: {
      type: PostType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        author: { type: GraphQLNonNull(GraphQLInt) }
      },
      resolve(_, post: any) {
        const lastId = authors.reduce((acc, cur) =>  cur.id > acc ? cur.id : acc, 0)
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth() + 1
        const day = today.getDate()
        post.id = lastId + 1
        post.date = `${day}/${month}/${year}`
        posts.push(post)
        return post
      }
    }
  }
})
