const {GraphQLServer}=require('graphql-yoga');
const Mutation=require('./resolvers/Mutation');
const Query=require('./resolvers/Query');
const prisma=require('./prisma');
const server=new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers:{
        Mutation,
        Query
    },
    context:(req)=>({req,prisma})
})
server.start(()=>{console.log("server running on port 4000")})