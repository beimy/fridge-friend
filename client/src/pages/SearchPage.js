import React, { useState, useEffect } from "react";
import Recipe from "../components/Recipe"
import ".././App.css";

const App = ({favRecipe, setFavRecipe}) => {
    const app_id = process.env.REACT_APP_EDAMAM_APP_ID;
    const api_key = process.env.REACT_APP_EDAMAM_API_KEY;

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=66de0d20&app_key=e88198d85ac46f01aa8f1b2b16c71d83`
        );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }

    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit" onClick={getRecipes}>Search</button>
            </form>
            <div className="recipes">
            {recipes.map(recipe => (
                <Recipe
                favRecipe={favRecipe}
                setFavRecipe={setFavRecipe}
                key={recipe.recipe.calories} 
                title={recipe.recipe.label}
                calories={recipe.recipe.calories} 
                image={recipe.recipe.image} 
                ingredients={recipe.recipe.ingredientLines}
                uri={(recipe.recipe.uri).split('_')[1]}
                url={recipe.recipe.url}
                />
            ))}
            </div>
        </div>
    );
};

export default App;