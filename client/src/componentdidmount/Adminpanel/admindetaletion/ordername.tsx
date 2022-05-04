import axios from "axios"
import React, { useEffect } from "react"
import {useTypedSelector} from "../../../hooks/userTypedSelector";



export const Ordername:React.FC<any> =({match})=>{
  

    const {tabledata} = useTypedSelector(state => state.table)

    return(
   
             <>
                  <li>Անուն - {tabledata[0] ?  tabledata[0].names : undefined } </li>   
                  <li>Ազգանուն - {tabledata[0] ?  tabledata[0].lastname : undefined}</li>
             </> 
        
      
    )
}