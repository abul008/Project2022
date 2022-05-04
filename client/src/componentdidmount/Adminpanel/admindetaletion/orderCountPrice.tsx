
import React, { useEffect } from "react"
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';


export const OrderCountPrice:React.FC<any> =({match})=>{
  
 
    const {tabledata} = useTypedSelector(state => state.table)
    
    return(
       <>
            <li>Վճարման չափ - {
               tabledata.map((data)=>{
                return(
                    data.order.reduce(function (result:number, item:any) {
                        return result + +item.price;
                      }, 0)
                )
            }) 
            } դ   
             </li>          
            <li>Քանակ - {
                tabledata.map((data)=>{
                    return(
                        data.order.reduce(function (result:number, item:any) {
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