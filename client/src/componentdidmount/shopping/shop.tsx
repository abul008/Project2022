import "./shop.css";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useActions } from '../../hooks/useActions';
import {ShopingList} from "./shoppingList";





export const Shop:React.FC<any> = ({match}) =>{
 
    const {quantity} = useTypedSelector(state => state.home)
    
    const {setChangequantity} = useActions()
   

  return(
     <div className="shop-page-wrapper" >
        <ShopingList page={+match.params.page} />
        {/* <ShopForm /> */}
     </div>
  )

}