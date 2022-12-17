import { 
    Bookinfoschema, 
    HomeCaruselInfoScema, 
    Homeinfoschema,
    orderSchema
} from "../models/index.js"
import { FileSizeFormatter, dbName } from "../config/index.js"
import fs from "fs"
// import { disconnect } from "process"

export const getMongoDb = ( async (req, res) => {  
  const  { tablename } = req.params
  try{
     let getAllinfo = [] 
       switch (tablename) {
         case dbName.book:
           getAllinfo = await Bookinfoschema.find({})
           break
         case dbName.carusel:
           getAllinfo = await HomeCaruselInfoScema.find({})
           break
         case dbName.home:
           getAllinfo = await Homeinfoschema.find({})
           break  
         case dbName.order:
           getAllinfo = await orderSchema.find({})
           break    
         default:
          res.status(404).send("data not found...")
       }    

    res.send(getAllinfo)

  }catch(error){
        res.send(error)
  }  
  }
)

export const postMongoDb = ( async(req,res)=>{
  const { create } = req.params   
  console.log('tableName', create) 
  try{
    let createDb = []
    switch (create) {
      case dbName.book:
        getAllinfo = await Bookinfoschema.find({})
        break
      case dbName.carusel:
        getAllinfo = await HomeCaruselInfoScema.find({})
        break
      case dbName.home:
        createDb = new Homeinfoschema(req.body)
        break  
      case dbName.order:
        createDb = new orderSchema(req.body)
        break    
      default:
        res.status(404).send("data not found...")
      }
    await createDb.save()

    res.status(201).send('File Uploaded Successsssafully');
  }catch (error) {
    res.status(400).send(error.message);
  }
 }
)

export const UploadSinglMongoDb = ( async ( req, res) => {
  try{
    const file = {
      fileName: req.file.originalname,
      fileHreaf:`${process.env.DOMAIN}carusel/${req.file.filename}`,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: FileSizeFormatter(req.file.size, 2) // 0.00
    }
    const createdata = {...req.body, ...file}
    const createDb = new HomeCaruselInfoScema(createdata)
    await createDb.save()

    res.status(201).send('File Uploaded Successsssafully');
  }catch (error) {
    res.status(400).send(error.message);
  }
 }
)

export const uploadMulterMongoDb = ( async ( req, res ) => {

  try {
    const filesArray = req.files.map(element => {
      return  {
          fileName: element.originalname,
          fileHreaf:`${process.env.DOMAIN}bookfoto/${element.filename}`,
          filePath: element.path,
          fileType: element.mimetype,
          fileSize: FileSizeFormatter(element.size, 2)
        }
    })
    const createdata = {...req.body, files:filesArray}
    const bookinfodb = new  Bookinfoschema( createdata )
    await  bookinfodb.save()

    res.status(201).send('Files Uploaded Successmmnnfully');
  }catch (error) {
    res.status(400).send(error.message);
  }
 }
)

export const deleteMongoDb = ( async ( req, res ) => {
  const { deleteId } = req.body
  try {
    let todo = []
    if (req.params.delete == 'book' || req.params.delete == 'carusel' ) {
      req.body.filepath.forEach(element =>{
        fs.unlink(element, (err) => {
          if (err) {
            console.error(err)
            return
          }
        })
   })
  }
  switch( req.params.delete ){
    case dbName.book:
      todo = await  Bookinfoschema.findByIdAndDelete(deleteId);
      break
    case dbName.carusel:
      todo = await HomeCaruselInfoScema.findByIdAndDelete(deleteId)
      break
    case dbName.home:
      todo = await Homeinfoschema.findByIdAndDelete(deleteId)
      break  
    case dbName.order:
      todo = await orderSchema.findByIdAndDelete(deleteId)
      break    
    default:
      res.status(404).send("data not found...")
   } 
  if (!todo) return res.status(404).send("Todo not found...")

  res.send(todo)
}catch(error){
  res.status(400).send(error.message)
}
})

export const UbdateMongoDb = ( async ( req, res ) => {  
  console.log('req.params.update', req.params.update)  
  const {_id} = req.body
  let ubdateDb = []
  try {
    switch( req.params.update){
      case dbName.book:
        ubdateDb = await  Bookinfoschema.findByIdAndUpdate(_id, req.body )
        break
      case dbName.carusel:
        ubdateDb = await HomeCaruselInfoScema.findByIdAndUpdate(_id, req.body)
        break
      case dbName.home:
        ubdateDb = await Homeinfoschema.findByIdAndUpdate(_id, req.body)
        break  
      case dbName.order:
        ubdateDb = await orderSchema.findByIdAndUpdate(_id, req.body)
        break    
      default:
        res.status(404).send("data not found...")
    }
     
    res.send(ubdateDb)
      
  }catch (error) {
    res.status(400).send(error.message)
  }
}
)