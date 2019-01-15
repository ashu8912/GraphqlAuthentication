const jwt=require('jsonwebtoken');
function getUserId(request){
    const header=request.request?request.request.headers.authorization:request.connection.context.Authorization;
    const token=header.replace("Bearer ",'');
    console.log(token);
    let decoded;
    try{
        decoded=jwt.verify(token,"secret");
    }catch(error){
        throw new Error("some internal error occured");
    }
    return decoded.id;
}
module.exports=getUserId;