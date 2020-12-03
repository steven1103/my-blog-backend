import { prisma } from "../../../../generated/prisma-client"

export default {
    Query:{
        explore:(_,args) => {
            return prisma.posts({
                where:{
                title_contains:""
            },
            orderBy:"createdAt_DESC",
            first:9,
        })
        }
    }
}
