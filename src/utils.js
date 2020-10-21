import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import path from "path"

dotenv.config({ path: path.resolve(__dirname, ".env") });

export const isAuthenticated = request => {
    if (!request.user) {
      throw Error("You need to log in to perform this action");
    }
    return;
  }; 

export const generateToken = id => jwt.sign({id}, process.env.JWT_SECRET)