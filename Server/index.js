import express from "express";
import session  from 'express-session';
import passport from "passport";
import MongoStore from 'connect-mongo';
import path from "path";
import { fileURLToPath } from 'url';

import {connectDB} from "./src/config/dbconnect.js";
import {routes} from "./src/routers/bookinfo.js";
import { homeroutes } from "./src/routers/homeinfo.js";
import {adminroutes} from "./src/routers/adminlogin.js";
import {order} from "./src/routers/order.js";
import cors from "cors"; 
import i18next from "i18next";
import Backend from "i18next-fs-backend";
import middleware from "i18next-http-middleware"
import bodyParser  from "body-parser"
import cookieParser from "cookie-parser";
import secure from 'express-force-https';
// import {pasportini ,pasportsession} from "./src/controllers/adminlogin.js";


i18next.use(Backend).use(middleware.LanguageDetector)
.init({
    fallbackLng:"en",
    backend:{
        loadPath:"./locales/{{lng}}/translations.json"
    }
})


const app = express()

app.use(secure);

connectDB();

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: process.env.MONGODB, collectionName: "sessions" }),
  cookie: {
      maxAge: 1000 * 60 * 60 * 24
  }
}))

  


app.use(cookieParser("secretcode"))
// app.use('/api/', express.static(path.join(__dirname,'uploads')));
// app.use(express.static('./methods-public'))
app.use(middleware.handle(i18next));
// app.use(fileUpload());


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyParser.json())

app.use(cors({
  origin:"http://localhost:3000" , 
  credentials:true
}));;




app.use(passport.initialize())
app.use(passport.session())
// const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;
// const pathToAdjacentFooFile = new URL('./foo.txt', import.meta.url).pathname;
// const pathToUpperBarFile = new URL('../client/build', import.meta.url).pathname;
const pathToUpperBarFile1 = new URL('../client/build/index.html', import.meta.url).pathname;
const __filename = fileURLToPath(import.meta.url)

// const somePath = join(__dirname, '../some-dir-or-some-file')

// console.log(somePath)
// const __dirname = dirname(__filename)
// let a  = path.join(__filename)

// console.log(__filename)
// console.log(__dirname)
// console.log(pathToAdjacentFooFile)
// console.log(pathToUpperBarFile)
// console.log(pathToUpperBarFile1)



console.log(`${__dirname}index.html`)


app.use('/api/v1/' , routes)
app.use('/api/v1/' , homeroutes)
app.use('/api/v1/', order)
app.use('/api/v1/', adminroutes)

// console.log(path.resolve("../client/build/index.html"))
app.use(express.static(path.resolve("../client/build/")))
app.get('*', (req, res) => {
  res.sendFile(path.resolve("../client/build/index.html"));
})


// app.post("/send_mail", cors(), async (req, res) => {
   
//   const {
//     name,
//     lastname,
//     phone,
//     email,
//     message,
//     data
//    } = req.body
  
//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//           user: process.env.EMAIL_NAME, // ethereal user
//           pass: process.env.EMAIL_PASSWORD, // ethereal password
//       },
//       tls:{
//         rejectUnauthorized:false
//       }

//   });
  
//   let msg = {
//       from:"albert.azroyan8@gmail.com", // sender address
//       to: email, // list of receivers
//       subject: "Patver", // Subject line
//       html:  ` <b>name:</b><span>${name}</span>
//                <b>lasname:</b> <span>${lastname}</span>
//                <b>phone:</b><span>${phone}</span>
//                <b>email:</b><span>${email}</span>
//                <>text:<p>${message}</p>
//            `, 
//   }
   
//   transporter.sendMail(msg, function(err,sucess){
//       if(err){
//         console.log(err)
//       }else{
//         console.log("Email sent successfuly");
//       }
//   })

// })



app.listen(process.env.PORT || 3000)