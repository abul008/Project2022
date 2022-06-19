/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {Tableinfo} from "../../../types/index"
import {AdminTableThead} from "../table/admintablethead";
import {AdminTableTbody} from "../table/adminTabletTbody";
import {TableStyle} from "../amdinorder/ordertable/tablestyle";
import { useActions } from "../../../hooks/useActions";
import {getChannels} from "../../../api/db/index";

export const OrderTable:React.FC = ()=>{

const [ordertable ,setOrdertable] = useState<Tableinfo[]>()
const {setViewLoader} = useActions()
    
useEffect(()=>{
  setViewLoader(false)
  getChannels('/api/v1/', 'get/order')
  .then(res=>{
    setOrdertable(res.data)
    setViewLoader(true)
  })
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
    
return ( 
< >
  <Link to="/webadmin/book/add">Ավելացնել ինֆորմացիա</Link>
  <TableStyle>
    <AdminTableThead 
      titleone="Անուն"
      titletwo="Ազգանուն" 
      titlwtree="Հեռախոսահամր" 
      titlefour="Էլ-հասցե"
      titlefive="ավելին" 
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
          infourl={'/api/v1/order/'}
          />
          )
          })
        }
    </tbody>
  </TableStyle>
</>
    )
}