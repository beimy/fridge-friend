import React, { Fragment, useEffect, useState } from "react";
import '../App.css'

const SinglePage = ({favRecipe, setFavRecipe}) => {
    const savedRecipeId = favRecipe.uri;
    // const app_id = process.env.REACT_APP_EDAMAM_APP_ID;
    // const api_key = process.env.REACT_APP_EDAMAM_API_KEY;

    const [recipe, setRecipe] = useState();
    let hasLoaded = false;

    useEffect(() => {
        if(!hasLoaded) {
            console.log('has loaded false 1')
            if (recipe) {
                console.log(`recipe is valid: ${recipe}`);
                getRecipes();
                hasLoaded = true;
            }
            else {
                console.log(`recipe is not valid: ${recipe}`);
                if (favRecipe.uri) {
                    console.log('setting receipe with favRecipe');
                    setRecipe(favRecipe.uri);
                    hasLoaded = true;
                } else if (localStorage.getItem('currentRecipeId')) {
                    console.log('setting receipe with local storage');
                    setRecipe(localStorage.getItem('currentRecipeId'));
                    hasLoaded = true;
                }
            }
            if (!hasLoaded && recipe) {
                getRecipes();
                hasLoaded = true;
            }
        }   
    });

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/api/recipes/v2/${recipe}?type=public&app_id=66de0d20&app_key=e88198d85ac46f01aa8f1b2b16c71d83`
        );
        const data = await response.json();
        console.log(data);
    };

    return (
        <Fragment>
            {recipe && <p>{`${recipe}`}</p>}
        </Fragment>
    )
}

export default SinglePage;