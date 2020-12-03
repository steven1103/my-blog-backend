import jwt from 'jsonwebtoken'
import dotenv from "dotenv"
import path from "path"
import nodemailer from "nodemailer"
dotenv.config({ path: path.resolve(__dirname, ".env") });

export const isAuthenticated = request => {
    if (!request.user) {
      throw Error("You need to log in to perform this action");
    }
    return;
  }; 

export const generateToken = id => jwt.sign({id}, process.env.JWT_SECRET)

export const generateSecret = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  var result = "";
  for ( var i = 0; i < 6; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result
}

export const sendMail = (emailS) => {
  const client = nodemailer.createTransport({
    host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass : process.env.PASSWORD
      },
      service:"gmail",
      tls :{
        rejectUnautorized : false
      }
  });
  return client.sendMail(emailS)
    .then(() => {
      console.log("Message sent!");
    })
    .catch((error) => {
      console.log(error);
    });
};


export const sendSecretMail = (adress, secret) => {
  const emailS = {
    from : `Team DEV.MAC-DevBlog <>`,
    to : adress,
    subject : "Login Secret for devmac-Blog",
    html : `<h2 style="font-weight:100; margin-left:10">Hi! This is devmac at Team DevBlog</h2><h2 style="color:grey; margin-left:78; font-weight:100;">로그인 코드는..<h2/>  <b style="font-size:200%; margin-left:120;">${secret}</b> <br/> <h2 style="font-weight:100; margin-left:10; color:grey;">사이트에 입력해주세요, 가입해주셔서 감사합니다!</h2>`
  }
  return sendMail(emailS)
}