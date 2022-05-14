import React from "react"
import "./ordercardimg.css"

interface Src{
   src:string
}

export const OrderImg:React.FC<Src> =({src})=>{
  



    

   
    return(
       <div className="order-card-img" style={{backgroundImage:`url(${src})` }}></div>   
    )
}