import { gql } from '@apollo/client';

export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        favRecipes {
            _id
            title
            images
            ingredientLines
            username
            url
            edamamID
        }
    }
}`

export const QUERY_RECIPES = gql`
{
    recipes {
        _id
        title
        ingredientLines
        images
        username
        url
        edamamID
    }
}`