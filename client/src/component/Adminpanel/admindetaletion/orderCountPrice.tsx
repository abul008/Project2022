
import React from "react"
import {useTypedSelector} from "../../../hooks/userTypedSelector";



export const OrderCountPrice:React.FC =()=>{
  
 
    const {tabledata} = useTypedSelector(state => state.table)

    console.log(tabledata)
    
    return(
       <>
            <li>Վճարման չափ - {
               tabledata.map((data)=>{
                return(
                    data.order.reduce(function (result:number, item) {
                        return result + +item.price;
                      }, 0)
                )
            }) 
            } դ   
             </li>          
            <li>Քանակ - {
                tabledata.map((data)=>{
                    return(
                        data.order.reduce(function (result:number, item) {
                            return result + +item.count;
                          }, 0)
                    )
                })
                }
                 Հատ
            </li>          
       </>
    )
}