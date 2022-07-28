import { useReducer } from "react";
import {
  ADD_RECIPES,
  REMOVE_RECIPES
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
  
    case ADD_RECIPES:
      return {
        ...state,
        favRecipe: [...state.favRecipe, action.favRecipe],
      };

    case REMOVE_RECIPES:
      let newState = state.favRecipe.filter(favRecipe => {
        return favRecipe._id !== action._id;
      });

      return {
        ...state,
        favRecipe: newState
      };

    default:
      return state;
  }
};

export function useRecipeReducer(initialState) {
  return useReducer(reducer, initialState)
}