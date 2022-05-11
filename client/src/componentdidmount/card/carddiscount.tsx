import React from "react";
import {Discounticon} from "../cssicons/cssicons";

interface DiscountCard{
    discount:number
}

export const DiscountCard:React.FC<DiscountCard > = ({discount})=>{
    
    if(!discount) return null

    return(
      <Discounticon>
          <span>{discount }%</span>
      </Discounticon>
    )
}