/* eslint-disable react/react-in-jsx-scope */
// import {Table} from "./ordertable/table";
// // import {TableStyle} from "./"
// import {useTypedSelector} from "../../../hooks/userTypedSelector";
// import { useActions } from '../../../hooks/useActions';
// import { useEffect } from "react";
// import axios from "axios";

// export const OrderTable = () =>{

//     const {setTablePage} = useActions()
//     const {tabledata} = useTypedSelector(state => state.table)



//     useEffect(()=>{
//        axios.get('/api/v1/getorder')
//        .then(res=>
//         setTablePage(res.data))
//     },[])

  
//     return(
//         <div className="admin-order-wrapper">
//             {/* <Table  /> */}
//         </div>
//     )
// }


import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Tableinfo} from "../../InterFace/table";
import {AdminTableThead} from "../table/admintablethead";
import {AdminTableTbody} from "../table/adminTabletTbody";
import {TableStyle} from "../amdinorder/ordertable/tablestyle";
import { useActions } from "../../../hooks/useActions";

export const OrderTable:React.FC = ()=>{

    const [ordertable ,setOrdertable] = useState<Tableinfo[]>()
    const {setViewLoader} = useActions()
    

  useEffect(()=>{
    setViewLoader(false)
    axios.get('/api/v1/getorder')
    .then(res=>{
      setOrdertable(res.data)
      setViewLoader(true)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
    



    return( 
        < >
         <Link to="/webadmin/book/add">Ավելացնել ինֆորմացիա</Link>
         <TableStyle>
            <AdminTableThead 
            titleone="Անուն" titletwo="Ազգանուն" titlwtree="Հեռախոսահամր" titlefour="Էլ-հասցե" titlefive="ավելին" 

            /> 
            <tbody>
              {
                  ordertable?.map((orderdata)=>{
                      return(
                        <AdminTableTbody key={orderdata._id}
                        infoone={orderdata.names} 
                        infotwo={orderdata.lastname} 
                        infotree={orderdata.phone}
                        infofour={orderdata.email} 
                        infofive={orderdata._id}
                        files={[]}
                        infoubdate={'order'}
                        infourl={'/api/v1/orderdelete/'}
                       />
                      )
                  })
              }
          </tbody>
         </TableStyle>
        </>
    )
}