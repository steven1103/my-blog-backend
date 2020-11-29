import { prisma } from "../../../../generated/prisma-client";

const DELETE = "DELETE";
const EDIT = "EDIT";

export default {
  Mutation: {
    editPost: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id, avatar, action,bio } = args;
      const { user } = request;
      const me = await prisma.$exists.user({ id, user: { id: user.id } });
      if (me) {
        if (action === EDIT) {
          return prisma.updateUser({
            data: { avatar,bio },
            where: {
               id 
              }
          });
        } else if (action === DELETE) {
          return prisma.deleteUser({ id });
        }
      } else {
        throw Error("You can't do that");
      }
    }
  }
};