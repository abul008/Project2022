import axios from "axios"
import { useEffect, useState } from "react"
import "./detailedinformation.css"



export const Detailedinformation = ({match}:any) =>{
    

    const [bookalldata , setBookalldata]= useState()

    console.log(match.params.id)

    useEffect(()=>{
         axios.get('/api/v1/getbookinfo')
         .then(res=>setBookalldata(res.data))
    },[])



    return(
        <div className="detailed-information-wrapper">
          <div className="detalied-information-wrapper-page">
            <div className="detalied-information-wraper-page-cantrol">            
             <div className="detalied-information-header-top">
                 <h2>{"bookalldata[0] ? "}</h2>
                  <span>{"bookalldata[0] ? bookalldata[0].productpromotionprice : null"}֏ </span>
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