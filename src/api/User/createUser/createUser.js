
import {prisma} from "../../../../generated/prisma-client";

export default {
   Mutation : {
     createUser : async (_,args) => {
     const {username, email} = args;
     const exists = await prisma.$exists.user({username})
     const emailExists = await prisma.$exists.user({email})
     if (exists) {
       throw Error("Username already taken")
     }
     if (emailExists) {
       throw Error("Email already taken")
     }
     await prisma.createUser({username, email})
     return true
    }
  }
} 