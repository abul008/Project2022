import axios from "axios"
import React, { useEffect } from "react"
import {Ordername} from "./ordername";
import {OrderContact} from "./ordercantact";
import { OrderCountPrice } from "./orderCountPrice";
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';


export const Orderinfo:React.FC<any> =({match})=>{
  
    const {setTablePage} = useActions()


    

    
    return(
       <ol>
          <Ordername />
          <OrderContact />
          <OrderCountPrice />
       </ol>
    )
}