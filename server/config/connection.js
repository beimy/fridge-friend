// connects to the mongoose db
const mongoose = require('mongoose');

// connects to the mongoose db via localhost
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fridge-friend', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// exports the connection
module.exports = mongoose.connection;
