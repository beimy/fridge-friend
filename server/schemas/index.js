// pulls the typeDefs and Resolvers
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// allows the files to be exported via a single location
module.exports = { typeDefs, resolvers };