const { Schema, model } = require('mongoose');

const RecipeSchema = new Schema({
    label: {
        type: String
    },
    ingredientLines: {
        type: String
    },
    yield: {
        type: Number
    },
    images: {
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
  })

// creates the Recipe model using the RecipeSchema
const Recipe = model('Recipe', RecipeSchema);

// exports the model
module.exports = Recipe;