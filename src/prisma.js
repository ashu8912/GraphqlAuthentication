const {Prisma}=require("prisma-binding");

const prisma=new Prisma({
    typeDefs:'src/generated/prisma.graphql',
    endpoint:"https://eu1.prisma.sh/ashu8912-6fb6e8/authenticateGraphQL/dev"
});
module.exports=prisma;