const { Schema, model } = require('mongoose');

const RecipeSchema = new Schema({
    recipeName: {
        type: String
    },
    ingredients: {
        type: String
    },
})

// creates the Recipe model using the RecipeSchema
const Recipe = model('Recipe', RecipeSchema);

// exports the model
module.exports = Recipe;