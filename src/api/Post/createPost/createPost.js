import {prisma} from "../../../../generated/prisma-client";

export default {
    Mutation : {
        createPost: async(_,args,{isAuthenticated, request}) => {
            isAuthenticated(request)
            const { user } = request
            const { text,title } = args;
            const post = prisma.createPost({
                title,
                text,
                user: {connect:{id:user.id}}
            });
            files.forEach(
                async file => 
                    await prisma.createFile({
                        url:file,
                        post:{
                            connect:{
                                id:post.id
                            }
                        }
                    })
            )
            tags.forEach(
                async tag =>
                  await prisma.createTags({
                    text:tag,
                    post: {
                      connect: {
                        id: post.id
                      }
                    }
                  })
              );
              return post;
        }
    }
}