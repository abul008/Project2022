import {Bookinfo} from "../models/book.js";
import {Bookinfoschema} from "../models/book.js"
import {FileSizeFormatter} from "../config/fileSizeFormater.js"






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
        ցategory,
        Numberofpages,
        Weight,
        Publisher,
        price,
        cover_am,
        cover_ru,
        cover_en,
        date,
        absolute_url
    } = req.body

    console.log(req)
   


    const filesArray = req.files.map(element => {
        return  {
            fileName: element.originalname,
            fileHreaf:`/bookfoto/${element.filename}`,
            filePath: element.path,
            fileType: element.mimetype,
            fileSize: FileSizeFormatter(element.size, 2)
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
        ցategory:ցategory,
        Numberofpages:Numberofpages,
        Weight:Weight,
        Publisher: Publisher,
        price:price,
        cover_am:cover_am,
        cover_ru:cover_ru,
        cover_en:cover_en,
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




export const getBookinfo = (async(req,res)=>{
  
    try{
        const getAllinfo = await Bookinfoschema.find({})
        res.send(getAllinfo)
    }catch(error){
        res.send(error)
    }
     
})


export const DeleteBookinfo = (async(req,res)=>{

    console.log(req.params.id)

    const {id} = req.params

    const todo = await Bookinfoschema.findById(id);

    if (!todo) return res.status(404).send("Todo not found...");
  
    const deletedTodo = await Bookinfoschema.findByIdAndDelete(id);
  
    res.send(deletedTodo);
})

