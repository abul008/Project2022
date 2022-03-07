import express from "express";
import session  from 'express-session';
import {connectDB} from "./src/config/dbconnect.js";
import {routes} from "./src/routers/bookinfo.js";
import cors from "cors"; 
import i18next from "i18next";
import Backend from "i18next-fs-backend";
import middleware from "i18next-http-middleware"
import bycript from "bcrypt";
import ConnectMongo from "connect-mongo";
import bodyParser  from "body-parser"
import cookieParser from "cookie-parser";
import secure from 'express-force-https';
import connectRedis from 'connect-redis';
import { Adminlogin } from "./src/models/login.js";





const RedisStore = connectRedis(session);



import {pasportini ,pasportsession} from "./src/controllers/adminlogin.js";


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

// app.use(session({

  
//     cookie: {
//       maxAge: 1000 * 60 * 60 * 60,
//       // secure: true
//     //   domain: 'http://localhost:3000/'
//     },
//     // store: store, // For some reason it stores the sessions but doesn't work properly
   
//     proxy: true,
//     httpOnly: true,
//     secret: 'keyboard cat',
//     resave: true,
//     saveUninitialized: true,
    
//   }));

  app.use(session({
    // store: new RedisStore({
    //   url: "http://localhost:3000/"
    // }),
    // secret:"ascnjskbc asjcabvkj aksjfcbaskjc askjcf",
    // saveUninitialized: true,
    // resave: false,
    // cookie: {
    //  httpOnly:true,
    //  maxAge:6000

    //       },

    cookie: {
      maxAge: 1000 * 60 * 60 * 60,
    httpOnly: true,

      // secure: true
    },
    // store: store, // For some reason it stores the sessions but doesn't work properly
    proxy: true,
    // httpOnly: true,
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }));

  

//   app.use((req,res, next)=>{
//     console.log(req.session)
//     console.log("hello")
//     next()
//  })
app.use(cookieParser("secretcode"))


app.use(middleware.handle(i18next));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(bodyParser.json())

app.use(cors({
  origin:"http://localhost:3000" , 
  credentials:true
}));;


app.use(pasportini);
app.use(pasportsession);

// passport.use(new passportLocal.Strategy({
//     usernameField: "email"
//    },
   
//    async(email,password,done)=>{
   
//     const user = await Adminlogin.findOne({email})

    
   
//    if(user === undefined){
//        return done(null, null, {message: "Incorrect email"});
//    }

//    if( user.password === password){
//           console.log(user)
//           return done(null, user);
//    }

//    done(null, null, {message: "Incorrect password"});
//         //   console.log(user) 
//     }));

//     passport.serializeUser(()=>{ // objactic stanum enq text
//        done(null ,user._id)
//     })
//     passport.deserializeUser(()=>{  //id- ic stanumenq text
//       done(null ,Adminlogin.findOne({_id}))  
//     })




    // app.post("/login", passport.authenticate("local", {
    //     // successRedirect: "/",
    //     // failureRedirect: "/logins"
    //   }));

app.get("/",async(req,res)=>{
   console.log(req.session)
   let a = await Adminlogin.find({})

  res.send(a)
})

app.use('/api/' , routes)



app.listen(process.env.PORT || 3000)