import {  useState } from "react";
import "./shopingCard.css";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import {productdatas} from "../helpers/auth";
import { useActions } from '../../hooks/useActions';
import "./shoppingList.css"



interface ShopingCardTyp{
  name:string,
  author:string,
  _id:string,
  price: number,
  count:number,
  filename:string
}

export const ShopingCard:React.FC<ShopingCardTyp> = ({
    name,
    author,
    _id ,
    price ,
    count ,
    filename
}) =>{
  
    const {quantity} = useTypedSelector(state => state.home)
    const {setChangequantity} = useActions()
    
    const [counts , setCounts] = useState(count)
   
    let array:string[] = productdatas() 

  
   
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
                          onClick={()=>{  
                            setCounts(counts - 1)
                           let indexdelete:number = array.findIndex((element:string) => element === _id)
                           if (indexdelete > -1) {
                            array.splice(indexdelete, 1).reverse()
                           }
                            localStorage.setItem('productdata', JSON.stringify(array))
                            setChangequantity(quantity - 1)
                          }}
                          ></button>
                             <div className="counts-shop-list"> {counts}</div>
                           <button onClick={()=>{ 
                            setCounts(counts + 1)
                            localStorage.setItem("productdata" , JSON.stringify([...array ,_id]))
                            setChangequantity(quantity + 1)
                          }
                            }></button>   
                       </div>
                       <div className="shop-list-price">{price * counts}֏</div>
               </div>
       
     
  )

}