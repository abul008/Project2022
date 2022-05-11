import {SvgShop} from "../svgicon/svg";
import "./shopingicon.css";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useActions } from '../../hooks/useActions';
import { Link ,useLocation } from "react-router-dom";


export const Shopicon:React.FC = () =>{
 
    const {quantity} = useTypedSelector(state => state.home)
    
    const {setChangequantity} = useActions()
    // let array:string[] = JSON.parse(localStorage.getItem('productdata') || "") 
    const {pathname} = useLocation<string>()    
    
    if(pathname.includes("/webadmin") || pathname.includes('/basket')) return null



   
  return(
      <Link to="/basket/1" className="shop-icon-wrapper">
         <SvgShop />
        <span  >{ quantity}</span> 
      </Link>
  )

}