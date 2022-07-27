import React, { useState } from 'react';
import style from '../recipe.module.css';
import { useMutation } from '@apollo/client';
import { ADD_RECIPE } from '../utils/mutations';
import { QUERY_ME, QUERY_RECIPES } from '../utils/queries';
import Auth from '../utils/auth';
import ReceipesButton from '../../components/ReceipesButton';

const Recipe = ({ title, calories, image, ingredients, url, yeild, id, uri, favRecipe, setFavRecipe }) => {
    
    const [addRecipe, {error}] = useMutation(ADD_RECIPE);
    // const [favRecipe, setFavRecipe] = useState({label: ''});


    const addToFavoriteHandler = async (event) => {
        event.preventDefault();
        setFavRecipe(uri);

        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if(!token) {
            console.log('no token found');
            return false;
        }

        try{
            await addRecipe({
                variables: { title, images, url, edamamID}
            });
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
            <ReceipesButton/>
        </div>
    );
};

export default Recipe;