const { Schema, model } = require('mongoose');

const RecipeSchema = new Schema({
<<<<<<< Updated upstream
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
=======
    name: {
        type: String,
        required: true,
    }
})

// makes the recipe model
const Recipe = model('Recipe', RecipeSchema);

>>>>>>> Stashed changes
module.exports = Recipe;