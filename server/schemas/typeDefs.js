// creates the GraphQL schema for the server
const { gql } = require('apollo-server-express');

// creates the typeDefs for the server
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    favRecipes: [Recipe]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Recipe {
    recipeId: String
    label: String
    ingredientLines: String
    yield: Int
    image: String
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    favRecipes(username: String): [Recipe]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addRecipe(recipeId: String!): Recipe
  }
`;
// do we query a user's recipes by just querying the user?
// be able to add & remove recipes from favorites

// exports the typeDefs
module.exports = typeDefs;