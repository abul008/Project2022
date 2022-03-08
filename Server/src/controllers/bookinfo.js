import {Bookinfo} from "../models/book.js";





export const uploadbookinfo =  ( async(req,res)=>{

   
    const {name_am} = req.body

    const file = req.files.files;
    console.log(file)
   const filesArray = file.map(element => {
        return  {
            fileName: element.name,
            fileHreaf:`uploadbookinfo/${element.filename}`,
            filePath: element.tempFilePath,
            fileType: element.mimetype,
            fileSize: fileSizeFormatter(element.size, 2)
          }
    });
  


    console.log(filesArray)

  
    const book = {
        title:"new blog",
        snipped: "about my new blog",
        body:"more about my new blog"
    };
    res.send(book)
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