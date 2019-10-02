import { authors, posts } from './db';
import { PostType } from './post.type';
import { AuthorType } from './author.type';
import { GraphQLObjectType, GraphQLNonNull, GraphQLList, GraphQLInt } from 'graphql';

export const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    // author
    author: {
      type: AuthorType,
      args: {
        id: {
          type: GraphQLNonNull(GraphQLInt)
        }
      },
      resolve(_, params: { id: number }) {
        return authors.find(a => a.id === params.id)
      }
    },
    authors: {
      type: GraphQLList(AuthorType),
      resolve() {
        return authors
      }
    },
    // posts
    posts: {
      type: GraphQLList(PostType),
      args: {
        author: {
          type: GraphQLNonNull(GraphQLInt)
        }
      },
      resolve(_, params: any) {
        const postsByAuthor = posts.filter(p => p.author === params.author)
        return postsByAuthor
      }
    }
  }
})
