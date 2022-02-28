import {Bookinfo} from "../models/book.js";


export const bookinfos =  ( (req,res)=>{
    const book = new Bookinfo({
        title:"new blog",
        snipped: "about my new blog",
        body:"more about my new blog"
    });
    console.log(req.t('user'))
    book.save()
    .then((resault)=>{
        res.send(resault)
    })
    .catch((err)=>{
        console.log(err)
    })
})
