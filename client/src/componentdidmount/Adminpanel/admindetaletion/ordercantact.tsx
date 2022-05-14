
import React from "react"
import {useTypedSelector} from "../../../hooks/userTypedSelector";


export const OrderContact:React.FC =()=>{
  

    const {tabledata} = useTypedSelector(state => state.table)
  

    

    return(
       <>
            <li>էլ.փոստ - {tabledata[0] ?  tabledata[0].email : undefined}</li>          
            <li>Հեռախոսահամար {tabledata[0] ?  tabledata[0].phone : undefined}</li>          
       </>
    )
}