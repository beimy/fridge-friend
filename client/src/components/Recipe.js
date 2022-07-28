import React, { useState, useEffect } from 'react';
import style from '../recipe.module.css';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_RECIPE, REMOVE_RECIPE } from '../utils/mutations';
import { QUERY_ME, QUERY_RECIPES } from '../utils/queries';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { RecipeProvider, useRecipeContext } from '../utils/GlobalState';
// import ReceipesButton from '../../components/ReceipesButton';
// import { ADD_RECIPES, REMOVE_RECIPES } from '../utils/actions';

const Recipe = ({ title, calories, image, ingredients, url, yeild, id, uri, favRecipe, setFavRecipe, fromSearch, fromUser, cuisineType, dietLabels, dishType, mealType, totalTime }) => {
    const ingredientLines = ingredients;
    const edamamID = uri;
    const [addRecipe, {error}] = useMutation(ADD_RECIPE);
    const [removeRecipe] = useMutation(REMOVE_RECIPE);

    // const [state, dispatch] = useRecipeContext();
    // const { me } = state;
    // const { data: recipeData } = useQuery(QUERY_ME);

    // useEffect(() => {
    //     if(recipeData) {
    //         dispatch({
    //             type: ADD_RECIPES,
    //             recipe: recipeData.me.favRecipes
    //         });
    //     }
    // }, [recipeData, dispatch]);
    
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
            })
            console.log(title);
            

            // Auth.loggedIn(data.loggedIn);
        } catch(e) {
            console.error(e);
        } 

        //window.location.reload();
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
        window.location.reload();
    }

    const singlePageHandler = () => {
        localStorage.setItem('currentRecipeId', `${edamamID}`);
        setFavRecipe(uri);
    }

    return (
        <div className={style.recipe}>
            {image && <img className={style.image} src={image} alt=""/>}

            <h1>{title}</h1>
            <h2>  
                {cuisineType && <p className={style.cuisineType}>{cuisineType}</p>}
                {dietLabels && <p className={style.dietLabels}>{dietLabels}</p>}
                {dishType && <p className={style.dishType}>{dishType}</p>}
                {mealType && <p className={style.mealType}>{mealType}</p>}
                {totalTime && <p className={style.totalTime}>{totalTime}</p>}
             </h2>
             <h3>Ingredients:</h3>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <div className="receipe-data-button">
            {!fromUser && <button type='button' onClick={addToFavoriteHandler}>Add to Favorites</button>}
            {!fromSearch && <button type='button' onClick={removeFavoriteHandler}>Remove from Favorites</button>}
            {/* <button type='button' onClick={singlePageHandler}>
                <Link to='/singlepage' style={{ textDecoration: 'none' }}>See more...</Link>
            </button> */}
            <a href={url}  target="_blank"><button type="button">Check the full recipe here</button></a>
            </div>
        </div>

    );
};

export default Recipe;