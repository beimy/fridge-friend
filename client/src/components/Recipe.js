import React, { useState } from 'react';
import style from '../recipe.module.css';
import { useMutation } from '@apollo/client';
import { ADD_RECIPE, REMOVE_RECIPE } from '../utils/mutations';
import { QUERY_ME, QUERY_RECIPES } from '../utils/queries';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
// import ReceipesButton from '../../components/ReceipesButton';

const Recipe = ({ title, calories, image, ingredients, url, yeild, id, uri, favRecipe, setFavRecipe }) => {
    const ingredientLines = ingredients;
    const edamamID = uri;
    const [addRecipe, {error}] = useMutation(ADD_RECIPE);
    const [removeRecipe] = useMutation(REMOVE_RECIPE);
    // const id = id
    console.log(id);
    
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
                variables: { title, image, url, edamamID, ingredientLines }
            });
            console.log(title);

            // Auth.loggedIn(data.loggedIn);
        } catch(e) {
            console.error(e);
        }
    };

    const removeFavoriteHandler = async (event) => {
        event.preventDefault();

        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if(!token) {
            console.log('no token found');
            return false;
        }

        try {
            await removeRecipe({
                variables: { id }
            });
        } catch(e) {
            console.error(e);
        }
        
    }

    const singlePageHandler = () => {
        localStorage.setItem('currentRecipeId', `${edamamID}`);
        setFavRecipe(uri);
    }

    return (
        <div className={style.recipe}>
            {image && <img className={style.image} src={image} alt=""/>}

            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <div className="receipe-data-button">
            <button type='button' onClick={addToFavoriteHandler}>Add to Favorites</button>
            <button type='button' onClick={removeFavoriteHandler}>Remove from Favorites</button>
            <button type='button' onClick={singlePageHandler}>
                <Link to='/singlepage' style={{ textDecoration: 'none' }}>See more...</Link>
            </button>
            <a href={url}  target="_blank"><button type="button">Check the full recipe here</button></a>
            </div>
        </div>

    );
};

export default Recipe;