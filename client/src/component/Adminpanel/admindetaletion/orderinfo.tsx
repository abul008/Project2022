
import React  from "react"
import {Ordername} from "./ordername";
import {OrderContact} from "./ordercantact";
import { OrderCountPrice } from "./orderCountPrice";


export const Orderinfo:React.FC =()=>{
  



    

    
    return(
       <ol>
          <Ordername />
          <OrderContact />
          <OrderCountPrice />
       </ol>
    )
}