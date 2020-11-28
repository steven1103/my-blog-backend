const { prisma } = require("../../../../generated/prisma-client");
const { generateToken } = require("../../../utils");

export default {
    Mutation:{
        confirmSecret:async(_,args) => {
            const {email, secret} = args;
            const user = await prisma.user({email})
            if (user.loginSecret === secret){
                await prisma.updateUser({where:{id:user.id},data:{loginSecret:""}})
                const token = generateToken(user.id)
                return token
            } else {
                throw Error("Wrong Secret/email combination")
            }
        }
    }
}