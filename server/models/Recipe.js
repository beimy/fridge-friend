const { Schema, model } = require('mongoose');

const RecipeSchema = new Schema({
    recipeId: {
        type: String,
        required: true,
        unique: true
    },
    label: {
        type: String
    },
    ingredientLines: {
        type: String
    },
    yield: {
        type: Number
    },
    image: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        required: true
      }
},
{
    toJSON: {
      getters: true
    }
  });

  const Recipe = model('Recipe', RecipeSchema);

// exports the model
module.exports = Recipe;