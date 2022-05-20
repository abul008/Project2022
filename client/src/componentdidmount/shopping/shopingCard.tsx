import React,{  useState } from "react";
import "./shopingCard.css";
import { shopList } from "../helpers/auth";
// import {useTypedSelector} from "../../hooks/userTypedSelector";
// import {productdatas} from "../helpers/auth";
// import { useActions } from '../../hooks/useActions';
import "./shoppingList.css";



interface ShopingCardTyp{
  name:string,
  author:string,
  _id:string,
  price: number,
  count:number,
  filename:string
}

interface CardShopList{
  id:string,
  count:number,
  name:string,
  author:string,
  file_url:string,
}

export const ShopingCard:React.FC<ShopingCardTyp> = ({
    name,
    author,
    _id ,
    price ,
    count ,
    filename
}) =>{
  

    
    const [counts , setCounts] = useState(count)
    const datas = shopList()
   
  return(
      
               <div  className="shop-list-card">
                 <div className="shop-list-product-info">
                   <div className="shop-list-img" style={{backgroundImage:`url(${filename})`}}></ div>
                     <div className="shop-list-name">
                       <span>{name} </span>
                       <span>{author} </span>
                     </div>
                      </div>
                       <div className="shop-list-count">
                           <button
                            disabled={counts  <= 1 ? true  : false}
                            onClick={()=>{  
                            setCounts(counts - 1)
                            const filter:number =  datas.findIndex((index:CardShopList)=>index.id === _id)
                            datas[filter].count --
                            localStorage.setItem("data" , JSON.stringify(datas))
                            // setChangequantity(quantity - 1)
                          }}
                          ></button>
                             <div className="counts-shop-list"> {counts}</div>
                           <button
                           disabled={counts  === 10 ? true  : false} 
                           onClick={()=>{ 
                            const filter:number =  datas.findIndex((index:CardShopList)=>index.id === _id)
                            datas[filter].count ++
                            localStorage.setItem("data" , JSON.stringify(datas))
                            setCounts(counts + 1)
                            // setChangequantity(quantity + 1)
                          }
                            }></button>   
                       </div>
                       <div className="shop-list-price">{price * counts}֏</div>
               </div>
       
     
  )

}