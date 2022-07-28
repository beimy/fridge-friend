const { Schema, model } = require('mongoose');
const commentSchema = require('./Comments');

const RecipeSchema = new Schema({
    title: {
        type: String
    },
    ingredientLines: {
        type: String
    },
    images: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    edamamID: {
        type: String,
        required: true
    },
    comments: [commentSchema]
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