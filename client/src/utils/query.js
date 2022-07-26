import { gql } from '@apollo/client';

export const GET_FAV_RECIPES = gql`
    {
        me {
            _id
            username
            favRecipes {
                recipeId
                label
                ingredientLines
                yield
                image
                username
            }
        }
    }
`;