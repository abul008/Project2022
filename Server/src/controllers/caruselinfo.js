import {Caruselinfoschema} from "../models/carusel.js"
import {FileSizeFormatter} from "../config/fileSizeFormater.js"


export const uploadcaruselinfo = ( async(req,res,next)=>{


 
    try{
        const file = new Caruselinfoschema({
            get_absolute_url:req.body.absolute_url,
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

export const getcaruselinfo = ( async(req,res,next)=>{


     const caruselinfo = await Caruselinfoschema.find({})

     const filter = caruselinfo.map((filter)=>{
          
        return{
            fileHreaf:filter.fileHreaf,
            get_absolute_url:filter.get_absolute_url
        }
     })
     

     res.send(filter)
   
 
})