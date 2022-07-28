import React, { Component } from 'react';
import { QUERY_RECIPES, QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Recipe from '../components/Recipe';
import UserProfile from 'react-user-profile';

 
const UserProfilePage = ({favRecipe, setFavRecipe}) => {

  const {loading, error, data} = useQuery(QUERY_ME);

    if(loading) return 'Loading';
    if(error) return `Error! ${error.message}`;
    console.log(data.me.favRecipes);
 
    return (
      <div style={{ margin: '0 auto', width: '100%' }}>
        <ul>
          {data.me.favRecipes.map(recipe => (
            <li key={recipe.uri}>
                <Recipe
                favRecipe={favRecipe}
                setFavRecipe={setFavRecipe}
                key={recipe.uri} 
                title={recipe.title}
                image={recipe.images} 
                ingredients={recipe.ingredientLines}
                uri={recipe.uri}
                url={recipe.url}
                id={recipe._id}
                />
            </li>
          ))}
        </ul>
      </div>
    )
}
 
export default UserProfilePage;