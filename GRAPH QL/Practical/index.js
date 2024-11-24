import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";
import _db from "./_db.js";
import { readFileSync } from "fs";

// types
const typeDefs = gql`
     ${readFileSync(new URL("./schema.gql", import.meta.url), "utf-8")}
`;

const resolvers = {
     Query: {
          reviews() {
               return _db.reviews;
          },
          games() {
               return _db.games;
          },
          authors() {
               return _db.authors;
          },
          review(_, args) {
               return _db.reviews.find((review)=> review.id === args.id)
          },
     },
};

// server setup
const server = new ApolloServer({
     typeDefs,
     resolvers,
});

const { url } = await startStandaloneServer(server, {
     listen: { port: 4000 },
});

console.log(`Server running at ${url}`);
