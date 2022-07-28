// Connects to the mongoose and express packages
const mongoose = require("mongoose");
const express = require("express");
// destructures the ApolloServer package
const { ApolloServer } = require("apollo-server-express");
// allows the use of middleware
const { authMiddleware } = require("./utils/auth");

// imports the schema files
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const path = require("path");

// sets up the port for testing Apollo locally on port 3001
const PORT = 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // This is for Apollo when used on a server
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Starts the ApolloServer connection
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);