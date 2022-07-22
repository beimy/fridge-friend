const mongoose = require('mongoose');

<<<<<<< Updated upstream
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fridge-friend', {
=======
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fridge-friend', {
>>>>>>> Stashed changes
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
