import axios from "axios"
import { useEffect, useState } from "react"
import { changelenguage } from "../helpers/auth"
import i18next from "i18next"
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
    

    const [detalieddata , setDetalieddata]= useState<any>()


    useEffect(()=>{
         axios.get('/api/v1/getbookinfo')
         .then(res=>
          setDetalieddata(res.data.filter((filter:BookDetalied)=>
          filter._id === match.params.id
          ).map((data:BookDetalied)=>{
            return{
              name:changelenguage(data ,"name"),
              autor:changelenguage(data ,"author"),
              cover:changelenguage(data, "cover"),
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
    

    

    // console.log(bookalldata)
    // bookalldata? bookalldata.map((data:any) =>console.log( data.file)) : undefined

  

    return(
        <div className="detailed-information-wrapper">
          <div className="detalied-information-wrapper-page">
            <div className="detalied-information-wraper-page-cantrol">            
             <div className="detalied-information-header-top">
                 <h2>{detalieddata ? detalieddata[0].autor : undefined}</h2>
                  <span>{detalieddata ? detalieddata[0].price : undefined}֏ </span>
               </div>
                <div className="detalied-information-header-bottom">
                 <div className="detealied-superficial-information">
                   <div className="detalied-image-to-show">
                       <img  className="detalied-image-list" src={detalieddata ? detalieddata[0].file[0] : undefined} />
                       <div className="detalied-all-image">
                         {
                         detalieddata ? detalieddata[0].file.map((datas:any,index:number)=>{
                           return(
                           <img key={index} src={`${datas}`}   className="detalied-image-small"></img>
                            )
                         }) : undefined
                         }
                       </div>
                   
                   </div>
                   <div className="detalied-superficial-information-list">
                     <table>
                       <tbody>
                         <tr>
                           <td>{i18next.t('autor')}</td>  
                           <td>{detalieddata ? detalieddata[0].autor : undefined}</td>  
                         </tr>
                         <tr>
                           <td>{i18next.t('language')}</td>  
                           <td>{detalieddata ? detalieddata[0].language : undefined}</td>  
                         </tr>
                         <tr>
                           <td>{i18next.t('publisher')}</td>  
                           <td>{detalieddata ? detalieddata[0].publisher : undefined}</td>  
                         </tr>
                         <tr>
                           <td>{i18next.t('pages')}</td>  
                           <td>{detalieddata ? detalieddata[0].pages : undefined}</td>  
                         </tr>  
                         <tr>
                           <td>{i18next.t('Publicationdate')}</td>  
                           <td>{detalieddata ? detalieddata[0].date : undefined}</td>  
                         </tr>
                         <tr>
                           <td>{i18next.t('weight')}</td>  
                           <td>{detalieddata ? detalieddata[0].weight : undefined}</td>  
                         </tr>  
                      </tbody>
                     </table>
                  
                   </div>
                 </div>
             </div>
             </div>
          </div>
        </div>
    )
}