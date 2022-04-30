
import React from "react";
import "./ordercardname.css";


interface Src{
    name:string,
    lastnaem:string
}

export const OrderCardName:React.FC<Src> =({name ,lastnaem})=>{
  

    return(
       <div className="order-card-name">
           <span >{name}</span>
           <span>{lastnaem}</span>
       </div>
    )
}