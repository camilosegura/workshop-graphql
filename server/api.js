const { makeExecutableSchema } = require('graphql-tools');

const schema = makeExecutableSchema({
  typeDefs: `
    type Post {
      id: Int!
      title: String
      user: User
    }

    type User {
      id: Int!
      name: String!
      lastname: String
      email: String!
    }

    type Query {
      posts: [Post]
      users: [User]
    }
  `,
  resolvers: {
    Query: {
      posts: () => [{
        id: 1,
        title: 'Mi titulo',
        user: {
          id: 1,
          name: 'Camilo',
          lastname: 'Segura',
          email: 'casegurar@gmail.com',
        },
      }],
      users: () => [{
        id: 1,
        name: 'Camilo',
        lastname: 'Segura',
        email: 'casegurar@gmail.com',
      },
      {
        id: 2,
        name: 'Andres',
        lastname: 'Ramirez',
        email: 'ramirez@gmail.com',
      },
      ],
    },
  },
});

module.exports = schema;
