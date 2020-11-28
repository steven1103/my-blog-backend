import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation:{
        ComOfCom: async(_,args,{isAuthenticated,request}) => {
            isAuthenticated(request)
            const {text,commentId} = args;
            const {user} = request;
            return await prisma.createComment({
                text,
                user:{
                    connect:{
                        id:user.id
                    }
                },
                comments:{
                    connect:{
                        id:commentId
                    }
                }
            })
        },
    }
}