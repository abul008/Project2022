import {Homeinfoschema} from "../models/home.js"
import {FileSizeFormatter} from "../config/fileSizeFormater.js"


export const uploadhomeinfo = ( async(req,res,next)=>{

         const {
            absolute_url,
            phone_number,
            phone_number2,
            email,
            addres,
            facebook_url,
            instagram_url,
            telegram_url,
            copyright_am,
            copyright_ru,
            copyright_en
         } = req.body
         
         

        
    try{
        const file = new Homeinfoschema({
            get_absolute_url:absolute_url,
            phone_number:phone_number,
            phone_number2:phone_number2,
            email:email,
            addres:addres,
            facebook_url:facebook_url,
            instagram_url:instagram_url,
            telegram_url:telegram_url,
            copyright_am:copyright_am,
            copyright_ru:copyright_ru,
            copyright_en:copyright_en,
            fileName: req.file.originalname,
            fileHreaf:`/carusel/${req.file.filename}`,
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


     const caruselinfo = await Homeinfoschema.find({})

    

     res.send(caruselinfo)
   
 
})