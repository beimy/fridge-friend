import React, { Fragment } from "react";

const SinglePage = ({favRecipe, setFavRecipe}) => {
    const savedRecipeId = 'b79327d05b8e5b838ad6cfd9576b30b6'
    const app_id = process.env.REACT_APP_EDAMAM_APP_ID;
    const api_key = process.env.REACT_APP_EDAMAM_API_KEY;

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/api/recipes/v2/${savedRecipeId}?type=public&app_id=${app_id}&app_key=${api_key}`
        );
        const data = await response.json();
        console.log(data);
    };

    return (
        <Fragment>
            <div>
                <p>{`${savedRecipeId}`}</p>
                <button type="button" onClick={getRecipes}>Test Button</button>
            </div>
        </Fragment>
    )
}

export default SinglePage;