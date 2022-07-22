<<<<<<< Updated upstream
const { User, Food } = require('../models');
=======
const { User, Recipe } = require('../models');
>>>>>>> Stashed changes
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
<<<<<<< Updated upstream
        foods: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Food.find(params).sort({ createdAt: -1 });
        },

        food: async (parent, { _id }) => {
            return Food.findOne({ _id });
        },

        users: async () => {
            return User.find()
                .select('__v -password')
                .populate('friends')
                .populate('foods');
=======
        users: async () => {
            return User.find()
                .select('__v -password');
>>>>>>> Stashed changes
        },

        user: async (parent, { username }) => {
            return User.findOne({ username })
<<<<<<< Updated upstream
                .select('__v -password')
                .populate('friends')
                .populate('foods');
=======
                .select('__v -password');
>>>>>>> Stashed changes
        },

        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id })
<<<<<<< Updated upstream
                    .select('-__v -password')
                    .populate('foods')
                    .populate('friends');
=======
                    .select('-__v -password');
>>>>>>> Stashed changes

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
<<<<<<< Updated upstream
        addFood: async (parent, args, context) => {
            if (context.user) {
                const food = await Food.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { foods: food._id } },
                    { new: true }
                );

                return food;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addReaction: async (parent, { foodId, reactionBody }, context) => {
            if(context.user) {
                const updatedFood = await Food.findOneAndUpdate(
                    { _id: foodId },
                    { $push: { reactions: { reactionBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updatedFood;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        addFriend: async(parent, { friendId }, context) => {
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: friendId } },
                    { new: true }
                ).populate('friends');

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
=======
>>>>>>> Stashed changes
    }
};

module.exports = resolvers;