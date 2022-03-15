import axios from "axios"
import { useEffect, useState } from "react"
import {Carusel} from "../CaruselScreen/carusel";
import {Card} from "../card/card";
import { any, string } from "prop-types";

interface Caruseldata{
    get_absolute_url:string,
    fileHreaf:string,
}

interface BookinformationCard {
  name_am:string,
  name_ru:string,
  name_en:string,
  author_am:string ,
  author_ru:string ,
  author_en:string,
  price:string,
  Language_am:string,
  get_absolute_url:string,
  ցategory:string,
  _id:string,
  files:any
}



export const Home:React.FC = ()=>{


    const [carueseldb , setCaruseldb] = useState<Caruseldata[]>([])
    const [bookinfo , setBookinfo] = useState<[]>([])

  


    useEffect(()=>{
        axios.get("/api/v1/caruselunfo")
        .then(res=>setCaruseldb(res.data))
      },[])

      useEffect(()=>{
        axios.get("/api/v1/getkoobinfo")
        .then(res=>setBookinfo(res.data.map((data:BookinformationCard)=>{
             return{
              cardname_am:data.name_am,
              cardname_ru:data.name_ru,
              cardname_en:data.name_en,
              cardauthor_am:data.author_am ,
              cardauthor_ru:data.author_ru ,
              cardauthor_en:data.author_en ,
              cardprice:data.price,
              cardlanguage:data.Language_am,
              cardurl:data.get_absolute_url,
              cardgetgoti:data.ցategory,
              id:data._id,
              cardfile:data.files.map((filterfile:any)=> filterfile.fileHreaf)
             }
        })))
      },[])
   

  

    
    return( 
         <div >
            <Carusel dataall={carueseldb}   />
            <Card carddata={bookinfo} />
         </div>
    )
}