import React from "react";
import "./card.css";



interface CardisavailabeType{
  getgoti:string,
  isisavailabe:string
}
 
export const Cardisavailabe:React.FC<CardisavailabeType> = (props) =>{




    return(
        
      
        <span 
            style={{ 
              background: props.getgoti === "Limited" ? "linear-gradient(to bottom, #cac531, #f3f9a7)" : undefined ||
              props.getgoti === "In stock"  ? "linear-gradient(to bottom, #1d976c, #93f9b9)" : undefined ||
              props.getgoti === "out of stock"  ? "linear-gradient(to bottom, #d31027, #ea384d)" : undefined || 
              props.getgoti === "New"  ? "linear-gradient(to bottom, #1d976c, #93f9b9)" : undefined 
            }}>{props.isisavailabe}
        </span>     
    )
}

