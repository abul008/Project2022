import React from "react";
import {Discounticon} from "../cssicons/cssicons";

interface DiscountCard{
    price:string,
    discount:string

}

export const PriceCard:React.FC<DiscountCard > = React.memo(({discount , price})=>{
    
    if(!discount) return <div className="page-product-cards-bottom"><b>{price}AMD</b></div>
    
    return(
    <div className="page-product-cards-bottom">
        <b>{discount}AMD</b>
        <del>{price}AMD</del>
    </div> 
    )
})