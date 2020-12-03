
import { prisma } from "../../../generated/prisma-client";

export default {
  Post: {
    user: ({ id }) => prisma.post({ id }).user(),
    files: ({ id }) => prisma.post({ id }).files(),
    comments: ({ id }) => prisma.post({ id }).comments(),
    likes: ({ id }) => prisma.post({ id }).likes(),
    tags : ({id}) => prisma.post({id}).tags(),
  }
};