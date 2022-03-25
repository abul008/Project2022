import axios from "axios"
import { useEffect, useState } from "react"
import { changelenguage } from "../helpers/auth"
import "./detailedinformation.css"



interface BookDetalied{
Language_am: string,
Numberofpages: string,
Publisher: string,
Weight: string,
author_am: string,
author_en: string,
author_ru:string,
date:string,
files: FilesHref[],
get_absolute_url: string,
name_am: string,
name_en: string,
name_ru: string,
price: string,
ցategory: string,
_id: string,
}

interface FilesHref{
  fileName:string,
  fileHreaf:string,
  filePath:string,
  fileType:string,
  fileSize:string
}


export const Detailedinformation = ({match}:any) =>{
    

    const [bookalldata , setBookalldata]= useState<any>()


    useEffect(()=>{
         axios.get('/api/v1/getbookinfo')
         .then(res=>
          setBookalldata(res.data.filter((filter:BookDetalied)=>
          filter._id === match.params.id
          ).map((data:BookDetalied)=>{
            return{
              name:changelenguage(data ,"name"),
              autor:changelenguage(data ,"author"),
              price:data.price,
              language:data.Language_am,
              pages:data.Numberofpages,
              weight:data.Weight,
              publisher:data.Publisher,
              date:data.date,
              file:data.files.map((file)=>file.fileHreaf)
            }
          })
          
          ))
    },[])


    return(
        <div className="detailed-information-wrapper">
          <div className="detalied-information-wrapper-page">
            <div className="detalied-information-wraper-page-cantrol">            
             <div className="detalied-information-header-top">
                 <h2>{bookalldata ? bookalldata[0].autor : undefined}</h2>
                  <span>{bookalldata ? bookalldata[0].price : undefined}֏ </span>
               </div>
                <div className="detalied-information-header-bottom">
                 <div className="detealied-superficial-information">
                   <div className="detalied-image-to-show">
                       <img  className="detalied-image-list" src="/bookfoto/1647144953896--274292980_4851693304938240_162270347709443494_n.jpg" />
                     {/* {
                       bookalldata.map((datas,index)=>{
                         return(
                           <img key={index} src={`/${datas.file}`}   className="detalied-image-list"></img>
                         )
                       })
                     } */}
                   </div>
                   <div className="detalied-superficial-information-list">
                       
                   </div>
                 </div>
             </div>
             </div>
          </div>
        </div>
    )
}