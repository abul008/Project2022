import {Bookinfo} from "../models/book.js";


export const uploadbookinfo =  ( async(req,res)=>{

   
    const {files ,name_am} = req.body
    console.log(req)
    const book = {
        title:"new blog",
        snipped: "about my new blog",
        body:"more about my new blog"
    };
    res.send(book)
})