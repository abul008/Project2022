/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { useParams }  from "react-router-dom";
import {Orderinfo} from "./orderinfo";
import {OrderDetliedCard} from "./card/ordercard";
import {Order} from "../../../custom_types/index";
import { useActions } from '../../../hooks/useActions';
import {getChannels} from "../../../api/db/index";
import "./detaliedinfo.css"

export const Admindetalied:React.FC = () => {
  
const {setTablePage} = useActions()
const { id } = useParams <{id?: string  | undefined}>()
    
useEffect(()=>{
   getChannels('/api/v1/', 'order')
   .then(res=>{
   const filterik = res.data.filter((filter:Order)=>filter._id === id)
   setTablePage(filterik)
})
},[])
  
return(
   <div className="order-detalied-head">
      <OrderDetliedCard />
      <Orderinfo />
   </div>
    )
}