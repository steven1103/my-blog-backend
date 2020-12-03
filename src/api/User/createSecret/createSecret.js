const { prisma } = require("../../../../generated/prisma-client")
const { generateSecret, sendSecretMail } = require("../../../utils")

export default {
    Mutation:{
        createSecret: async(_,args) => {
            const {email} = args;
            
                const loginSecret = generateSecret()
                try {
                    await sendSecretMail(email,loginSecret)
                    await prisma.updateUser({data:{loginSecret},where:{email}})
                    return true
                } catch(e) {
                    console.log(e)
                    return false
                }
           
        }
    }
}