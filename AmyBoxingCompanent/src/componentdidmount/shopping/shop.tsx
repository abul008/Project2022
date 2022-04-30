import {SvgShop} from "../svgicon/svg";
import "./shop.css";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useActions } from '../../hooks/useActions';
import {ShopingList} from "./shoppingList";
import {ShopForm} from "./shoppingform";
import { Link } from "react-router-dom";
import { array } from "prop-types";




export const Shop:React.FC<any> = ({match}) =>{
 
    const {quantity} = useTypedSelector(state => state.home)
    
    const {setChangequantity} = useActions()
   
   console.log("array")
  return(
     <div className="shop-page-wrapper" >
        <ShopingList page={+match.params.page} />
        <ShopForm />
     </div>
  )

}