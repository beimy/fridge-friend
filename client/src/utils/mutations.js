import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_RECIPE = gql`
mutation addRecipe($title: String!, $ingredientLines: String, $images: String, $username: String, $url: String!, $edamamID: String!) {
  addRecipe(title: $title, ingredientLines: $ingredientLines, images: $images, username: $username, url: $url, edamamID: $edamamID) {
    title
    ingredientLines
    images
    username
    url
    edamamID
  }
}`

export const REMOVE_RECIPE = gql`
  mutation removeRecipe($edamamID: String!) {
    removeRecipe(edamamID: $edamamID) {
      edamamID
    }
  }
`;