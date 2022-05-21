import React, { useEffect  } from "react";
import {SvgShop} from "../svgicon/svg";
import ReactDom from 'react-dom'
import "./shopingicon.css";
import { shopList } from "../helpers/auth";
import {CardShopList} from "../InterFace/shopList";
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useActions } from '../../hooks/useActions';
import { Link ,useLocation  } from "react-router-dom";



export const Shopicon:React.FC = () =>{
 
    const {quantity} = useTypedSelector(state => state.home)
    const {setChangequantity} = useActions()
    const shopallcount = shopList().reduce((data:number , datas:CardShopList)=>datas.count +=data,0)
 

    useEffect(()=>{
      setChangequantity(shopallcount)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   

    const {pathname} = useLocation<string>()    
    
    if(pathname.includes("/webadmin") || pathname.includes('/basket')) return null

    
  return ReactDom.createPortal(
      <Link to="/basket/1"  className="shop-icon-wrapper">
         <SvgShop />
        <span  >{ quantity}</span> 
      </Link> 
      , document.getElementById('root-icon') as HTMLElement
  )

}
