import {Bookinfo} from "../models/book.js";





export const uploadbookinfo =  ( async(req,res,next)=>{

   
    const {name_am} = req.body

    const files = req;

    // console.log(files)
 
    // let filesArray = [];
    // req.files.forEach(element => {
    //     const file = {
    //         fileName: element.originalname,
    //         fileHreaf:`uploadbookinfo/${element.filename}`,
    //         filePath: element.path,
    //         fileType: element.mimetype,
    //         fileSize: fileSizeFormatter(element.size, 2)
    //     }
    //     filesArray.push(file);
    // });


   console.log(req.files.file)
    const filesArray = req.files.map(element => {
        return  {
            fileName: element.originalname,
            fileHreaf:`uploadbookinfo/${element.filename}`,
            filePath: element.path,
            fileType: element.mimetype,
            fileSize: fileSizeFormatter(element.size, 2)
          }
    });

    console.log(filesArray)

  
    res.status(201).send('Files Uploaded Successmmnnfully');
})


const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}