import React from 'react';
import { QUERY_RECIPES, QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Recipe from '../components/Recipe';
import UserProfile from 'react-user-profile';

 
const UserProfilePage = ({favRecipe, setFavRecipe, usersFavRecipeList, setUsersFavRecipeList}) => {

  const {loading, error, data} = useQuery(QUERY_ME);
  // setUsersFavRecipeList(data);

    if(loading) return 'Loading';
    if(error) return `Error! ${error.message}`;
    // console.log(usersFavRecipeList.me.favRecipes);
    console.log(data)
 
    return (
      <>
      <div className="modal-title big-div">
        <h2 className="lettuce-div">
          Viewing {data.me.username}'s Profile
        </h2>
      </div>
      <div style={{ margin: '0 auto', width: '100%' }}>
        {data.me.favRecipes[0] ? (<ul>
                  {data.me.favRecipes.map(recipe => (
                    <li key={recipe._id}>
                        <Recipe
                        usersFavRecipeList={usersFavRecipeList}
                        setUsersFavRecipeList={setUsersFavRecipeList}
                        favRecipe={favRecipe}
                        setFavRecipe={setFavRecipe}
                        key={recipe.uri} 
                        title={recipe.title}
                        image={recipe.images} 
                        ingredients={recipe.ingredientLines}
                        uri={recipe.uri}
                        url={recipe.url}
                        id={recipe._id}
                        fromUser={true}
                        />
                    </li>
                  ))}
                </ul>) : (
                  <div className='big-div padding-top'>
                    <p>You have no favorites yet! <strong>Lettuce</strong> add some!</p>
                    <img src='https://cdn.discordapp.com/attachments/1002292630929022986/1002326475090968681/istockphoto-862629000-1024x1024.jpg'></img>
                  </div>
                )}  
      </div>
      </>
    )
}
 
export default UserProfilePage;