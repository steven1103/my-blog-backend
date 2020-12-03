const { prisma } = require("../../../../generated/prisma-client");

export default {
    Query:{
        searchPost:async(_,args) => {
            const { term } = args;
            console.log(term)
            return prisma.posts({where:{OR:[
                {tags_some:{text:term}},
                {title_contains:term}
            ]
        },last:9
    }
    )
        }
    }
}