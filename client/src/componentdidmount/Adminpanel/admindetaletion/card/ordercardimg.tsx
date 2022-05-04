import React from "react"
import {useTypedSelector} from "../../../../hooks/userTypedSelector";
import "./ordercardimg.css"

interface Src{
   src:string
}

export const OrderImg:React.FC<Src> =({src})=>{
  

    const {tabledata} = useTypedSelector(state => state.table)

    

   
    return(
       <div className="order-card-img" style={{backgroundImage:`url(${src})` }}></div>   
    )
}