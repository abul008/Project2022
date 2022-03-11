import {Bookinfo} from "../models/book.js";
import {Bookinfoschema} from "../models/book.js"





export const uploadbookinfo = ( async(req,res,next)=>{


    try{

        
    const  {
        name_am,
        name_ru,
        name_en,
        author_am,
        author_ru,
        author_en,
        Language_am,
        Numberofpages,
        Weight,
        Publisher,
        price,
        date,
        absolute_url
    } = req.body


    const filesArray = req.files.map(element => {
        return  {
            fileName: element.originalname,
            fileHreaf:`/media/bookfoto/${element.filename}`,
            filePath: element.path,
            fileType: element.mimetype,
            fileSize: fileSizeFormatter(element.size, 2)
          }
    });


    const bookinfodb = new  Bookinfoschema({
        name_am:name_am,
        name_ru:name_ru,
        name_en:name_en,
        author_am:author_am,
        author_ru:author_ru,
        author_en:author_en,
        Language_am:Language_am,
        Numberofpages:Numberofpages,
        Weight:Weight,
        Publisher: Publisher,
        price:price,
        date:date,
        get_absolute_url:absolute_url,
        files:filesArray
    })

    await  bookinfodb.save()

     
    res.status(201).send('Files Uploaded Successmmnnfully');
}catch(error) {
    res.status(400).send(error.message);
}
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