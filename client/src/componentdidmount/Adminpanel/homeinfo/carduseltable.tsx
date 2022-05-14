import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {AdminTableThead} from "../table/admintablethead";
import {AdminTableTbody} from "../table/adminTabletTbody";
import { Caruseldata } from "../../InterFace/carusel";
import {TableStyle} from "../amdinorder/ordertable/tablestyle";
import { useActions } from "../../../hooks/useActions";

export const CaruselTable:React.FC = ()=>{

    const [caruseltable ,setCaruselable] = useState<Caruseldata[]>()
    const {setViewLoader} = useActions()

  useEffect(()=>{
    setViewLoader(false)
    axios.get('/api/v1/gethomecarusel')
    .then(res=>{
      setCaruselable(res.data)
      setViewLoader(true)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  
  

   
    return( 
        < >
         <Link to="/webadmin/carusel/add">Ավելացնել ինֆորմացիա</Link>
         <TableStyle>
            <AdminTableThead 
            titleone="Հասցե" titletwo="Տեսակ" titlwtree="Ամսաթիվ" titlefour="Չափը" titlefive="Ավելին" 

            /> 
            <tbody>
              {
                  caruseltable?.map((caruseldata)=>{
                      return(
                        <AdminTableTbody key={caruseldata._id}
                        infoone={caruseldata.get_absolute_url} 
                        infotwo={caruseldata.fileType} 
                        infotree={caruseldata.createdAt}
                        infofour={caruseldata.fileSize} 
                        infofive={caruseldata._id}
                        files={[caruseldata]}
                        infoubdate={'carusel/ubdate'}
                        infourl={'/api/v1/homecaruseldelete/'}
                       />
                      )
                  })
              }
          </tbody>
         </TableStyle>
      
        </>
    )
}