const { User, Recipe } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            // returns the user that is currently logged in
            if(context.user) {
                // if the user is logged in, return the user
                const userData = await User.findOne({ _id: context.user._id })
                // blocks the __v element and the password element from being called
                    .select('-__v -password')
                    .populate('favRecipes');

                return userData;
            }
            // checks if user is logged in and throws error if not
            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            // return all users
            return User.find()
            // blocks the __v element and the password element from being called
                 .select('-__v -password')
                 .populate('favRecipes');
        },

        user: async (parent, { username }) => {
            // returns a single user by id
            return User.findOne({ username })
            // blocks the __v element and the password element from being called
                .select('-__v -password')
                .populate('favRecipes');
        },
        
        // get recipe by username. if no username, return all thoughts
        recipes: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Recipe.find(params).sort({ createdAt: -1 });
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            // sets the info to be sent to the server to be stored in the database
            const user = await User.create(args);
            const token = signToken(user);

            // returns the user and the token
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            // finds the user by email
            const user = await User.findOne({ email });

            // if the user is not found, throw an error
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            // if the user is found, check if the password is correct
            const correctPw = await user.isCorrectPassword(password);

            // if the password is incorrect, throw an error
            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            // if the password is correct, sign the user in
            const token = signToken(user);
            return { token, user };
        },
        addRecipe: async (parent, args, context) => {
            if (context.user) {
              const recipe = await Recipe.create({ ...args, username: context.user.username });
              console.log(recipe);
      
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { favRecipes: recipe } },
                { new: true }
              );
      
              return recipe;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },
          removeRecipe: async (parent, { _id }, context) => {
            
            if (context.user) {
                const user = context.user;
                
                try {
                    const recipe = await Recipe.findById(_id);
                    console.log(recipe);
                    if (user.username === recipe.username) {
                        console.log(recipe.username);
                        await recipe.delete();
                        return 'Favorite Recipe successfuly not a favorite any longer.';
                    } else {
                        throw new AuthenticationError('Action not allowed.')
                    }
                } catch(error) {
                    throw new Error(error);
                }
            }
          },
          addComment: async (parent, { commentId, commentBody }, context) => {
            if (context.user) {
              const updatedRecipe = await Recipe.findOneAndUpdate(
                { _id: commentId },
                { $push: { comments: { commentBody, username: context.user.username } } },
                { new: true, runValidators: true }
              );
          
              return updatedRecipe;
            }
          
            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

// exports the resolvers
module.exports = resolvers;