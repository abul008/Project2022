import {SvgShop} from "../svgicon/svg";
import "./shopingicon.css";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useActions } from '../../hooks/useActions';
import { Link } from "react-router-dom";


export const Shopicon:React.FC = () =>{
 
    const {quantity} = useTypedSelector(state => state.home)
    
    const {setChangequantity} = useActions()
    // let array:string[] = JSON.parse(localStorage.getItem('productdata') || "") 
    




   
  return(
      <Link to="/basket/1" className="shop-icon-wrapper">
         <SvgShop />
        <span  >{ quantity}</span> 
      </Link>
  )

}