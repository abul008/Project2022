import axios from "axios";
import React , { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import i18next from "i18next";
import { changelenguage } from "../helpers/auth";
import {BookinformationCard} from "../InterFace/bookPageInterface";
import ReactHtmlParser from 'html-react-parser';
import {SvgTransform} from "../svgicon/svg";
import "./detailedinformation.css"


interface Detalied{
  id:string,
  autor: string,
  cover: string,
  date: string,
  file:string[],
  language: string,
  name: string,
  pages: string,
  price: string,
  publisher: string,
  weight: string,
}




export const Detailedinformation:React.FC = () =>{
    

    const [detalieddata , setDetalieddata]= useState<Detalied[]>()
    const [headimg , setHeadimg] = useState<  number>(0)
    const { id } = useParams <{id?: string  | undefined}>();
    

    useEffect(()=>{
         axios.get('/api/v1/getbookinfo')
         .then(res=>{
          setDetalieddata(res.data.filter((filter:BookinformationCard)=>
          filter._id === id
          ).map((data:BookinformationCard)=>{
            return{
              id:data._id,
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
        
          )})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

    const filelength = detalieddata ? detalieddata[0].file.length - 1 : undefined
    
   
   

    return(
        <div className="detailed-information-wrapper">
          <div className="detalied-information-wrapper-page">
            <div className="detalied-information-wraper-page-cantrol">            
                              <div className="detalied-information-header-top">
                                  <h2>{detalieddata ? detalieddata[0].name : undefined}</h2>
                                  <span>{detalieddata ? detalieddata[0].price : undefined}֏ </span>
                                   </div>
                                      <div className="detalied-information-header-bottom">
                                            <div className="detealied-superficial-information">
                                                <div className="detalied-image-to-show">
                                                  <div className="detalied-image-list-cantrol">
                                                  <img  className="detalied-image-list" src={detalieddata ? detalieddata[0].file[headimg] : undefined} />
                                                     <div  className="change-image-icon-svg">
                                                         <button disabled={headimg === 0 ? true : false}  onClick={()=>{setHeadimg(headimg - 1)}} className="rotate-image-list list-left"><SvgTransform /></button>
                                                         <button disabled={headimg === filelength ? true : false} onClick={()=>{setHeadimg(headimg + 1)}} className="rotate-image-list list-right"><SvgTransform /></button>
                                                    </div>
                                                  </div>
                                                      <div  className="detalied-all-image">
                                                       {
                                                       detalieddata ? detalieddata[0].file.map((datas,index)=>{
                                                         return(
                                                         <img onClick={()=>setHeadimg(index)} key={datas} src={`${datas}`} alt="bookfoto"  className="detalied-image-small"></img>
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
                                            <div className="dtelied-cover">
                                              {ReactHtmlParser(`${detalieddata ? detalieddata[0].cover : undefined}`)}
                                            </div>
                                    </div>
             </div>
          </div>
        </div>
    )
}