
import React, { useEffect } from "react"
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';


export const OrderContact:React.FC<any> =({match})=>{
  
    const {setTablePage} = useActions()
    const {tabledata} = useTypedSelector(state => state.table)
  

    

    return(
       <>
            <li>էլ.փոստ - {tabledata[0] ?  tabledata[0].email : undefined}</li>          
            <li>Հեռախոսահամար {tabledata[0] ?  tabledata[0].phone : undefined}</li>          
       </>
    )
}