import { prisma } from "../../../../generated/prisma-client";

const DELETE = "DELETE";
const EDIT = "EDIT";

export default {
  Mutation: {
    editPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { postId, title, text, action } = args;
      const { user } = request;
      const post = await prisma.$exists.post({ id:postId, user: { id: user.id } });
      if (post) {
        if (action === EDIT) {
          return prisma.updatePost({
            data: { title,text },
            where: {
               id:postId 
              }
          });
        } else if (action === DELETE) {
          return prisma.deletePost({ id:postId });
        }
      } else {
        throw Error("You can't do that");
      }
    }
  }
};