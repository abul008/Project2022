import {Table} from "./ordertable/table";
// import {TableStyle} from "./"
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import { useActions } from '../../../hooks/useActions';
import { useEffect } from "react";
import axios from "axios";

export const Adminorder = () =>{

    const {setTablePage} = useActions()
    const {tabledata} = useTypedSelector(state => state.table)



    useEffect(()=>{
       axios.get('/api/v1/getorder')
       .then(res=>
        setTablePage(res.data))
    },[])

  
    return(
        <div className="admin-order-wrapper">
            <Table  />
        </div>
    )
}