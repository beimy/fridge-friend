// imports the Schema and model types from mongoose
const { Schema, model } = require('mongoose');
// hashes the password before saving it to the database
const bcrypt = require('bcrypt');

// creates the user model
const userSchema = new Schema(
  {
    username: {
      // Sets username type value as a string that is required and unique
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      // regex value used to validate the email
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

// This is where the favorited recipes are to be stored
// userSchema.virtual('favoriteRecipe').get(function() {
//   return this.recipe.length;
// });

// creates the useable User model
const User = model('User', userSchema);

// exports the model
module.exports = User;
