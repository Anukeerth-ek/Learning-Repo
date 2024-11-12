import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'

import _db from "./_db.js";

// types
import {typeDefs} from './schema.gql'

const resolvers = {
    Query: {
       reviews(){
         return  _db.reviews
       },
       games(){
        return _db.games
       },
       authors(){
        return _db.authors
       }
    }
}

// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
})


const {url} = await startStandaloneServer(server, {
    listen:{port: 4000}
})
