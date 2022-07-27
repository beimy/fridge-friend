import React, { useState } from 'react';
import style from '../recipe.module.css';
import { useMutation } from '@apollo/client';
import { ADD_RECIPE } from '../utils/mutations';
import { QUERY_ME, QUERY_RECIPES } from '../utils/queries';
import Auth from '../utils/auth';

const Recipe = ({ title, calories, images, ingredients, url, id, uri, favRecipe, setFavRecipe }) => {
    const ingredientLines = ingredients;
    const edamamID = uri;
    // const [favRecipe, setFavRecipe] = useState({label: ''});

    const [addRecipe, {error}] = useMutation(ADD_RECIPE);
    //     , {
    //    update(cache, { data: { addRecipe } }) {
    //     try{
    //         const {me} = cache.readQuery({ query: QUERY_ME});
    //         cache.writeQuery({
    //             query: QUERY_ME,
    //             data: {me: {...me, favRecipes: [...me.favRecipes, addRecipe] } },
    //         });
    //     } catch (e) {
    //         console.warn("First recipe favorited")
    //     }

    //     const { favRecipes } = cache.readQuery({ query: QUERY_RECIPES });
    //     cache.writeQuery({
    //         query: QUERY_RECIPES,
    //         data: { recipes: [addRecipe, ...favRecipes] },
    //     });
    //    } 
    // });

    const addToFavoriteHandler = async (event) => {
        event.preventDefault();
        setFavRecipe(uri);
        

        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if(!token) {
            console.log('no token found');
            return false;
        }

        try{
            const {data} = await addRecipe({
                variables: { title, images, url, edamamID}
            });
            console.log(title);

            Auth.loggedIn(data.loggedIn);
        } catch(e) {
            console.error(e);
        }
    };

    return (
        <div className={style.recipe}>
            <img className={style.image} src={images} alt=""/>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <button type='button' onClick={addToFavoriteHandler}>Add to Favorites</button>
            
        </div>
    );
};

export default Recipe;