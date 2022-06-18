import {Homeinfoschema , HomeCaruselInfoScema} from "../models/home.js";
import {FileSizeFormatter} from "../config/fileSizeFormater.js";
import fs from "fs";
// import { session } from "passport";


export const homeinfo = ( async(req,res,next)=>{

         const {
            phone_number,
            phone_number2,
            email,
            addres,
            facebook_url,
            instagram_url,
            telegram_url,
            copyrightAm,
            copyrightRu,
            copyrightEn,
            litleinfoAm,
            litleinfoRu,
            litleinfoEn
         } = req.body
         
         

        
    try{
        const file = new Homeinfoschema({
            // get_absolute_url:absolute_url,
            phone_number:phone_number,
            phone_number2:phone_number2,
            email:email,
            addres:addres,
            facebook_url:facebook_url,
            instagram_url:instagram_url,
            telegram_url:telegram_url,
            copyright_am: copyrightAm,
            copyright_ru:copyrightRu,
            copyright_en:copyrightEn,
            litleinfo_am:litleinfoAm,
            litleinfo_ru:litleinfoRu,
            litleinfo_en:litleinfoEn,
            // fileName: req.file.originalname,
            // fileHreaf:`/carusel/${req.file.filename}`,
            // filePath: req.file.path,
            // fileType: req.file.mimetype,
            // fileSize: FileSizeFormatter(req.file.size, 2) // 0.00
        });
        await file.save();
        res.status(201).send('File Uploaded Successsssafully');
    }catch(error) {
        res.status(400).send(error.message);
    }
 
})


export const HomeCaruselinfo = ( async(req,res,next)=>{

const { absolute_url } = req.body
  
try{
   const file = new HomeCaruselInfoScema({
       get_absolute_url:absolute_url,
       fileName: req.file.originalname,
       fileHreaf:`${process.env.DOMAIN}carusel/${req.file.filename}`,
       filePath: req.file.path,
       fileType: req.file.mimetype,
       fileSize: FileSizeFormatter(req.file.size, 2) // 0.00
   });
   await file.save();
   res.status(201).send('File Uploaded Successsssafully');
}catch(error) {
   res.status(400).send(error.message);
}

})

export const gethomeinfo = ( async(req,res,next)=>{
   

     const homeinfo = await Homeinfoschema.find({})
   
     res.send(homeinfo)
   
 
})

export const gethomecaruselinfo = (async(req,res)=>{
    const homeCarusel = await HomeCaruselInfoScema.find({})

    res.send(homeCarusel)
})

export const DeleteHomeinfo = (async(req,res)=>{
     
    const { deleteId } = req.body
     
   
   try{


           const todo = await Homeinfoschema.findById(deleteId);

            if (!todo) return res.status(404).send("Todo not found...");
        
            const deletedTodo = await Homeinfoschema.findByIdAndDelete(deleteId);
           
            res.send(deletedTodo);
   }catch(error){
        res.status(400).send(error.message)
   }
})

export const DeleteHomeCaruselinfo = (async(req,res)=>{

    const {
        deleteId,
        filepath
    } = req.body

    try{
    
    //  if (!filepath) return res.status(404).send("Todo not found...");
 
    filepath.forEach(element =>{
        fs.unlink(element, (err) => {
            if (err) {
                console.error(err)
                return
          }
      });
   })

    const todo = await HomeCaruselInfoScema.findById(deleteId);

    if (!todo) return res.status(404).send("Todo not found...");
  
    const deletedTodo = await HomeCaruselInfoScema.findByIdAndDelete(deleteId);
  
    res.send(deletedTodo);
    }catch(error){
        res.status(400).send(error.message)
    }
})