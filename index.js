const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const port = process.env.PORT || 4000;
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "Hello world";
    },
  },
};

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });
  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app });
  app.use((req, res) => {
    res.json({ msg: "Hello world" });
  });
  app.listen(port, () => {
    console.log(`Application is running on ${port}`);
  });
}
startServer();
