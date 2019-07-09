import { GraphQLServer, PubSub } from 'graphql-yoga'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import {  models } from './db/index';
import mongoose from 'mongoose';


// SET UP Mongoose Promises.
mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://tom:Tom_chean0927@cluster0-fz7xv.gcp.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser: true
});
const db = mongoose.connection
 
db.dropDatabase()

const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription
  }, 
  context: {
    db,
    pubsub,
    models
  }
})  

server.start(4000, () => console.log('Server is running on localhost:4000'))
