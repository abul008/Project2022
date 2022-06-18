import { 
    Bookinfoschema, 
    HomeCaruselInfoScema, 
    Homeinfoschema ,
    orderSchema
} from "../models/index.js"

export const getMongoDb = ( async (req, res) => {
   
const  { tablename } = req.params

try{
   let getAllinfo = [] 
   switch(tablename){
    case 'book':
      getAllinfo = await Bookinfoschema.find({})
      break
    case 'carusel':
      getAllinfo = await HomeCaruselInfoScema.find({})
      break
    case 'home':
      getAllinfo = await Homeinfoschema.find({})
      break  
    case 'order':
      getAllinfo = await orderSchema.find({})
      break    
    default:
      res.status(404).send("book not found...")
   }    
  
res.send(getAllinfo)
    }catch(error){
        res.send(error)
    }  
})