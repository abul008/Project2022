import {SvgShop} from "../svgicon/svg";
import "./shopingicon.css";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useActions } from '../../hooks/useActions';


export const Shopicon:React.FC = () =>{
 
    const {quantity} = useTypedSelector(state => state.home)
    
    const {setChangequantity} = useActions()
    let array:string[] = JSON.parse(localStorage.getItem('productdata') || "") 
    




   
  return(
      <div className="shop-icon-wrapper">
         <SvgShop />
        <span >{array.length + 1}</span> 
      </div>
  )

}