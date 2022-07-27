import React, { useState } from 'react';
import style from '../recipe.module.css';
import { useMutation } from '@apollo/client';
import { ADD_RECIPE } from '../utils/mutations';
import Auth from '../utils/auth';

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

        try {
            await addRecipe({
                variables: {uri},
            });

            console.log(`Saved ${title} to favorite books`)
        } catch(err) {
            console.log(err);
        }
    };

    return (
        <div className={style.recipe}>
            <img className={style.image} src={image} alt=""/>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <div className="receipe-data-button">
            <button type='button' onClick={addToFavoriteHandler}>Add to Favorites</button>
            <button><a href={url}  target="_blank">Recipe Url</a></button>
            </div>
        </div>

    );
};

export default Recipe;