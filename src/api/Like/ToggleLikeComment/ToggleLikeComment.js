import { prisma } from "../../../../generated/prisma-client"

export default {
    Mutation:{
        toggleLikeC:async(_,args,{isAuthenticated,request}) => {
            isAuthenticated(request)
            const {user} = request
            const {id} = args;
            const filterOptions = {
                AND : [
                    {
                    user:{
                        id : user.id
                    }
                 },
                 {
                     comment:{
                         id:id
                     }
                 }
                 
                ] 
            }
            const isLiked = await prisma.$exists.like(filterOptions)
            try {
                const existingLike = await prisma.$exists.like(filterOptions);
                if(existingLike) {
                    await prisma.deleteManyLikes(filterOptions)
                } else {
                    const newLike = await prisma.createLike({user : {connect:{ id : user.id }}, comments : { connect : { id : id}}})
                }
                return true
               } catch (error) {
                   console.log(error)
                   return false
               }
        }
    }
}