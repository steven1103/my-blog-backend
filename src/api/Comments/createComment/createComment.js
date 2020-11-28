import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation:{
        createComment: async(_,args,{isAuthenticated,request}) => {
            isAuthenticated(request)
            const {text,postId} = args;
            const {user} = request;
            return await prisma.createComment({
                text,
                user:{
                    connect:{
                        id:user.id
                    }
                },
                post:{
                    connect:{
                        id:postId
                    }
                }
            })
        },
    }
}