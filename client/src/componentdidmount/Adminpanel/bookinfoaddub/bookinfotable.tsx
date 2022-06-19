import React,{ useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookinformationCard } from "../../../types/index";
import {AdminTableThead} from "../table/admintablethead";
import {AdminTableTbody} from "../table/adminTabletTbody";
import {TableStyle} from "../amdinorder/ordertable/tablestyle";
import { useActions } from "../../../hooks/useActions";
import {getChannels} from "../../../api/db/index";

export const BookTable:React.FC = ()=>{

    const [booktable ,setBooktable] = useState<BookinformationCard[]>()
    const {setViewLoader} = useActions()
     
  useEffect(()=>{
    setViewLoader(false)
    getChannels('/api/v1/', 'get/book')
    .then(res=>{
      setBooktable(res.data)
      setViewLoader(true)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  
    

    return( 
        < >
         <Link to="/webadmin/book/create" data-testid="createBook"  >Ավելացնել ինֆորմացիա</Link>
         <TableStyle>
            <AdminTableThead 
            titleone="Անուն" titletwo="Հեղինակ" titlwtree="Լեզու" titlefour="ամսաթիվ" titlefive="ավելին" 

            /> 
            <tbody>
              {
                  booktable?.map((bookdata)=>{
                      return(
                        <AdminTableTbody key={bookdata._id}
                        infoone={bookdata.name_am} 
                        infotwo={bookdata.author_am} 
                        infotree={bookdata.Language_am}
                        infofour={bookdata.date} 
                        infofive={bookdata._id}
                        files={bookdata.files}
                        infoubdate={'ubdate'}
                        infourl={'/api/v1/book/'}
                       />
                      )
                  })
              }
          </tbody>
         </TableStyle>
        </>
    )
}