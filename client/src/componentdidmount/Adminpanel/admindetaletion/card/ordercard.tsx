
import React from "react"
import {OrderImg} from "./ordercardimg";
import {OrderCardName} from "./ordercardname";
import {useTypedSelector} from "../../../../hooks/userTypedSelector";
import {OrderCardCount} from "./ordercardcount";
import {OrderCardPrice} from "./ordercardprice";
import "./ordercard.css";


export const OrderDetliedCard:React.FC =()=>{
       

    const {tabledata} = useTypedSelector(state => state.table)






    
    return(
       <div className="order-card-wrapper">
                {
                tabledata[0] ? tabledata[0].order.map((data, index)=>{
                   return(
                    <div key={data._id} className="order-card">
                       <OrderImg  src={data.filename} /> 
                       <OrderCardName name={data.name} lastnaem={data.author} />
                       <OrderCardCount count={data.count} />
                       <OrderCardPrice price={data.price} />
                    </ div> 
                   )        
              }) :undefined
           }
         
       </div>
    )
}