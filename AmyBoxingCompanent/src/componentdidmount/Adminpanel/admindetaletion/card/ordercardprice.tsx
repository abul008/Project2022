import React from "react"


interface Price{
   price:string
}

export const OrderCardPrice:React.FC<Price> =({price})=>{
  

    return(
       <div className="order-card-price">
         <span>{price}</span>
       </div>
    )
}