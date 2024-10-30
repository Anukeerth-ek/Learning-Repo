import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'

const server = new ApolloServer({
    // typeDefs
    // resolvers
})
console.log("server is ", server)

const {url} = await startStandaloneServer(server, {
    listen:{port: 4000}
})

console.log("url", 4000)