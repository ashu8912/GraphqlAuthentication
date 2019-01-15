const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const getUserId=require('../utils/getUserId');
const Mutation={
async createUser(parent,{data},{req,prisma},info){
   console.log(prisma);
    const {email,password}=data;
    if(email.length<=6){
        throw new Error("email must be greater than 6 characters");
    }
    let hashedPassword;
    try
    {const salt=await bcrypt.genSalt(10)
     hashedPassword=await bcrypt.hash(password,salt);
    }
    catch(error){
     throw new Error("internal error try again");
    }
    const user=await prisma.mutation.createUser({data:{email,password:hashedPassword}})
    console.log(user);
    let token=jwt.sign({id:user.id},"secret");
    return {user,token};
},
updateUserPassword(parent,{password},{req,prisma},info){
const userId=getUserId(req);
if(prisma.exists.User({id:userId}))
{
    return prisma.mutation.updateUser({data:{password},where:{
        id:userId
    }},info)
}
throw new Error("you are not authorized");
}
}
module.exports=Mutation;