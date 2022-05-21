import React,{  useState ,useContext, useLayoutEffect } from "react";
import "./shopingCard.css";
import { shopList } from "../helpers/auth";
import { UserContext } from "./context";
import "./shoppingList.css";



interface CardShopList{
  id:string,
  count:number,
  price?:number
  name:string,
  author:string,
  file_url:string,
}

export const ShopingCardButton:React.FC = () =>{
  

    
    const [counts , setCounts] = useState(0)
    const datas = shopList()
    const ShopCardContext = useContext(UserContext); 

    useLayoutEffect(()=>{
       setCounts(ShopCardContext.count)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return(
      
         <>
                       <div className="shop-list-count">
                           <button
                            disabled={counts  <= 1 ? true  : false}
                            onClick={()=>{  
                            setCounts(counts - 1)
                            const filter:number =  datas.findIndex((index:CardShopList)=>index.id === ShopCardContext._id)
                            datas[filter].count --
                            localStorage.setItem("data" , JSON.stringify(datas))
                            // setChangequantity(quantity - 1)
                          }}
                          ></button>
                             <div className="counts-shop-list"> {counts}</div>
                           <button
                           disabled={counts  === 10 ? true  : false} 
                           onClick={()=>{ 
                            const filter:number =  datas.findIndex((index:CardShopList)=>index.id === ShopCardContext._id)
                            datas[filter].count ++
                            localStorage.setItem("data" , JSON.stringify(datas))
                            setCounts(counts + 1)
                            // setChangequantity(quantity + 1)
                          }
                            }></button>   
                       </div>   
                       <div className="shop-list-price">{ShopCardContext.price * counts}֏</div>
                </>
  )

}