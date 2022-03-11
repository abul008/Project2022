import {Caruselinfoschema} from "../models/carusel.js"
import {FileSizeFormatter} from "../config/fileSizeFormater.js"


export const uploadcaruselinfo = ( async(req,res,next)=>{


    try{

        
    const  {
         absolute_url
    } = req.body

    console.log(absolute_url, req.files)


    const filesArray = req.files.map(element => {
        return  {
            fileName: element.originalname,
            fileHreaf:`/media/bookfoto/${element.filename}`,
            filePath: element.path,
            fileType: element.mimetype,
            fileSize: FileSizeFormatter(element.size, 2)
          }
    });


    const bookinfodb = new  Caruselinfoschema({
        get_absolute_url:absolute_url,
        files:filesArray
    })

    await  bookinfodb.save()

     
    res.status(201).send('Files Uploaded Successmmnnfully');
}catch(error) {
    res.status(400).send(error.message);
}
})