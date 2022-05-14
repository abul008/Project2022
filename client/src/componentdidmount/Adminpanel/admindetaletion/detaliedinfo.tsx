/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios"
import React, { useEffect } from "react"
import { useParams  }  from "react-router-dom";
import {Orderinfo} from "./orderinfo";
import {OrderDetliedCard} from "./card/ordercard";
import {Order} from "../../InterFace/order";
import { useActions } from '../../../hooks/useActions';
import "./detaliedinfo.css"


export const Admindetalied:React.FC =()=>{
  
  
    const {setTablePage} = useActions()
    
    const { id } = useParams <{id?: string  | undefined}>();
    
   

    useEffect(()=>{
       axios.get('/api/v1/getorder')
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