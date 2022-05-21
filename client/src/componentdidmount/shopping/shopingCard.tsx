import React,{useContext } from "react";
import {UserContext} from "./context";
import "./shopingCard.css";
import {ShopingCardButton} from "./shopcountbutton";
import "./shoppingList.css";


export const ShopingCard:React.FC = () =>{
  
    const useDarkContext = useContext(UserContext);


  return(
      
               <div  className="shop-list-card">
                <div className="shop-list-product-info">
                   <div className="shop-list-img" style={{backgroundImage:`url(${useDarkContext.filename})`}}></ div>
                    <div className="shop-list-name">
                       <span>{useDarkContext.name}</span>
                       <span>{useDarkContext.author}</span>
                    </div>
                </div>
                       <ShopingCardButton   />
               </div>
       
     
  )

}