import axios from "axios"
import React, { useEffect } from "react"
import {Orderinfo} from "./orderinfo";
import {OrderDetliedCard} from "./card/ordercard"
import { useActions } from '../../../hooks/useActions';
import "./detaliedinfo.css"


export const Admindetalied:React.FC<any> =({match})=>{
  
    const {setTablePage} = useActions()


    useEffect(()=>{
       axios.get('/api/v1/getorder')
       .then(res=>setTablePage(res.data.filter((filter:any)=>filter._id === match.params.id)))
    },[])

    
    return(
       <div className="order-detalied-head">
          <OrderDetliedCard />
          <Orderinfo />
       </div>
    )
}