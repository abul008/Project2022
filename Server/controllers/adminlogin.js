import {Adminlogin} from "../models/login.js";
import {Bookinfo} from "../models/book.js"


export const admilogin =  ( async  (req,res)=>{
    const adminlogin = await Adminlogin.find({})
    res.send(adminlogin)

})