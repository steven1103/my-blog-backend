import { prisma } from "../../../../generated/prisma-client"

export default {
    Mutation:{ 
        pinPost:async(_,args) => {
            const {userId,postId} = args;
            return await prisma.updateUser({
                where:{
                    id:userId
                },
                data:{
                    mainPost:{
                        connect:{
                            id:postId
                        }
                    }
                }
            })
        }
    }
}