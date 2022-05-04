// import {Bookinfo} from "../models/book.js";
import {Bookinfoschema} from "../models/book.js"
import {FileSizeFormatter} from "../config/fileSizeFormater.js"
import fs from "fs"




export const uploadbookinfo = ( async(req,res,next)=>{


    try{

      const filesArray = req.files.map(element => {
        return  {
            fileName: element.originalname,
            fileHreaf:`/bookfoto/${element.filename}`,
            filePath: element.path,
            fileType: element.mimetype,
            fileSize: FileSizeFormatter(element.size, 2)
          }
    });

    const createdata = {...req.body ,files:filesArray}

    const bookinfodb = new  Bookinfoschema(createdata)

    await  bookinfodb.save()

     
    res.status(201).send('Files Uploaded Successmmnnfully');
}catch(error) {
    res.status(400).send(error.message);
}
})


export const getBookinfo = (async(req,res)=>{

    try{
        const getAllinfo = await Bookinfoschema.find({})
        
        if (!getAllinfo) return res.status(404).send("book not found...");

        res.send(getAllinfo)
    }catch(error){
        res.send(error)
    }
     
})

export const UbdateBookinfo = (async(req,res)=>{
    
    const {_id} = req.body

    try{
        
          const bookinfos = await Bookinfoschema.findById(_id);

          if (!bookinfos) return res.status(404).send("book not found...");

          await Bookinfoschema.findByIdAndUpdate( _id,req.body)

          res.send('ubdate')
        
    }catch(error){
        res.status(400).send(error.message)
    }
})


export const DeleteBookinfo = (async(req,res)=>{

    const {
        deleteId,
        filepath
    } = req.body

 
    try{
 
      filepath.forEach(element =>{
         fs.unlink(element, (err) => {
             if (err) {
                console.error(err)
                return
          }
      });
    })

    const todo = await Bookinfoschema.findById(deleteId);

    if (!todo) return res.status(404).send("Todo not found...");
  
    const deletedTodo = await Bookinfoschema.findByIdAndDelete(deleteId);
  
    res.send(deletedTodo);

}catch(error){
    res.status(400).send(error.message)
}

})

