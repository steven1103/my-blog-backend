import {prisma} from "../../../../generated/prisma-client";

export default {
   Mutation : {
     createUser : async (_,args) => {
     const {username, email} = args;
     const exists = await prisma.$exists.user({username})
     const emailExists = await prisma.$exists.user({email})
     if (exists) {
       throw Error("사용중인 계정 이름입니다, 다른 걸 골라주세요")
     }
     if (emailExists) {
       throw Error("이미 가입된 이메일입니다")
     }
     await prisma.createUser({username, email})
     return true
    }
  }
} 