const Query={
users(parent,args,{prisma},info){
    console.log("inside");
    return prisma.query.users(null,info);
}
}
module.exports=Query;