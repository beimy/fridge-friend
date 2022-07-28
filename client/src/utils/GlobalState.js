import React, { createContext, useContext } from "react";
import { useRecipeReducer } from './reducers'

const RecipeContext = createContext();
const { Provider } = RecipeContext;

const RecipeProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useRecipeReducer({
    title: [],
    IngredientLines: [],
    images: [],
    username: [],
    url: [],
    id: [],
    edamamId: [],
    _id: [],
  });

  console.log(state);
  return <Provider value={[state, dispatch]} {...props} />;
};

const useRecipeContext = () => {
  return useContext(RecipeContext);
};

export { RecipeProvider, useRecipeContext };