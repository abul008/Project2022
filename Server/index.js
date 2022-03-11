import express from "express";
import session  from 'express-session';
import {connectDB} from "./src/config/dbconnect.js";
import {routes} from "./src/routers/bookinfo.js";
import { caruselroutes } from "./src/routers/caruselinfo.js";
import cors from "cors"; 
import i18next from "i18next";
import Backend from "i18next-fs-backend";
import middleware from "i18next-http-middleware"
import bodyParser  from "body-parser"
import cookieParser from "cookie-parser";
import secure from 'express-force-https';
import { Adminlogin } from "./src/models/login.js";



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

  


app.use(cookieParser("secretcode"))
// app.use('/api/', express.static(path.join(__dirname,'uploads')));
// app.use(express.static('./methods-public'))
app.use(middleware.handle(i18next));
// app.use(fileUpload());

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(bodyParser.json())

app.use(cors({
  origin:"http://localhost:3000" , 
  credentials:true
}));;


app.use(pasportini);
app.use(pasportsession);



app.get("/",async(req,res)=>{
   console.log(req.session)
   let a = await Adminlogin.find({})

  res.send(a)
})



app.use('/api/' , routes)
app.use('/api/' , caruselroutes)



app.listen(process.env.PORT || 3000)