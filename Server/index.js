import express from "express";
import {connectDB} from "./config/dbconnect.js";
import  bodyParser from "body-parser";
import {routes} from "./routers/bookinfo.js";
import cors from "cors"; 
import i18next from "i18next";
import Backend from "i18next-fs-backend";
import middleware from "i18next-http-middleware"

i18next.use(Backend).use(middleware.LanguageDetector)
.init({
    fallbackLng:"en",
    backend:{
        loadPath:"./locales/{{lng}}/translations.json"
    }
})

const app = express()
connectDB();
app.use(middleware.handle(i18next));
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(bodyParser.json())

app.use(cors({
    origin:"http://localhost:3000" , 
    credentials:true
}));





app.use('/api/' , routes)



app.listen(process.env.PORT || 3000)