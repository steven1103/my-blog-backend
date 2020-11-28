import dotenv from "dotenv"
import path from "path"

dotenv.config({ path: path.resolve(__dirname, ".env") });

export default {
    Mutation:{
        isAdmin:(_,args)=> {
            const { code } = args;
            if (code===process.env.CODE) {
                return true
            } else {
                return false
            }
        }
    }
}