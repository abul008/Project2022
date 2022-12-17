import React from "react"

interface Price{
   count:number
}

export const OrderCardCount:React.FC<Price> =({count})=>{ 
  return (
   <div className="order-card-price">
         <span>{count}</span>
       </div>
    )
}