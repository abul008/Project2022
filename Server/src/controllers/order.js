// import { Console } from "console";
import nodemailer  from "nodemailer";
import {google} from "googleapis";
import { orderSchema } from "../models/order.js";
// import * as EmailValidator from 'email-validator';
// import emailValidator  from 'deep-email-validator'


const CLIENT_ID = '353413271878-otfvk9qpvq9urr8cak6but53jcggt8vo.apps.googleusercontent.com';
const CLEINT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = 'ya29.A0ARrdaM9BrxJ3isoaQ9Fn96TTtNW3MI_jFphttqU0VGS6UiITs-d3S8XuX2y2Xz7TB8HtNolYMRiHwyFawU3poEqBwqoBQ2D2mqHWsTtaL0rYSfCJJDndpORyH2B03lRnLU5ykE025k3Ntg7FbPf_tq6PRy9D';

const oAuth2Client = new google.auth.OAuth2(
       CLIENT_ID,
       CLEINT_SECRET,
       REDIRECT_URI
     );

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });     

export const orderInfo = (async(req,res)=>{
       const {
         name,
         lastname,
         phone,
         email,
         message,
         data
       } = req.body

   
     let orderDb =  new orderSchema({
              names:name,
              lastname:lastname,
              email:email,
              phone:phone,
              message:message,
              order:data
       })

       await  orderDb.save()

        

    
       try {
              const accessToken = await oAuth2Client.getAccessToken();
          
              const transport = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  type: 'OAuth2',
                  user: email,
                  clientId: CLIENT_ID,
                  clientSecret: CLEINT_SECRET,
                  refreshToken: REFRESH_TOKEN,
                  accessToken: accessToken,
                },
              });
          
              const mailOptions = {
                from: 'SENDER NAME <albert.azroyan8@gmail.com>',
                to: "azroyan1997@mail.ru",
                subject: 'Hello from gmail using API',
                text: 'Hello from gmail email using API',
                html: '<h1>Hello from gmail email using API</h1>',
              };
          
              const result = await transport.sendMail(mailOptions);

              // console.log(result)
              return result;
            } catch (error) {
              // return error;
              console.log(error)
            }
       
})

// export const Getorderinfo = (async(req,res)=>{

//     const  getorder= await orderSchema.find({})

//     console.log(getorder)
    

// })

export const Getorderinfo = (async(req,res)=>{
     
  const getorder = await orderSchema.find({})
 
  res.send(getorder)
})