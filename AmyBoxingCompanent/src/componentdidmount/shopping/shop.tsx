import {SvgShop} from "../svgicon/svg";
import "./shop.css";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useActions } from '../../hooks/useActions';
import {ShopingList} from "./shoppingList";
import {ShopForm} from "./shoppingform";
import { Link } from "react-router-dom";


export const Shop:React.FC = () =>{
 
    const {quantity} = useTypedSelector(state => state.home)
    
    const {setChangequantity} = useActions()
    // let array:string[] = JSON.parse(localStorage.getItem('productdata') || "") 
    




   
  return(
     <div className="shop-page-wrapper" >
        <ShopingList />
        <ShopForm />
     </div>
  )

}