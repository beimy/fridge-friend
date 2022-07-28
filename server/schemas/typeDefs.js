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
    _id: ID
    title: String
    ingredientLines: [String]
    images: String
    username: String!
    url: String!
    edamamID: String!
    comments: [Comment] 
  }
  type Comment {
    _id: ID
    username: String
    commentBody: String
    createdAt: String
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    recipes: Recipe
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addRecipe(title: String!, ingredientLines: [String], images: String, username: String, url: String!, edamamID: String!): Recipe
    removeRecipe(_id: ID!): Recipe
    addComment(recipeId: ID!, commentBody: String!): Recipe
  }
`;

// exports the typeDefs
module.exports = typeDefs;
