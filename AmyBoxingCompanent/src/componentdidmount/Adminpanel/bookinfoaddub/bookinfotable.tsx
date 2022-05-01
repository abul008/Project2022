import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {BookinformationCard} from "../../InterFace/bookPageInterface";
import {AdminTableThead} from "../table/admintablethead";
import {AdminTableTbody} from "../table/adminTabletTbody";
import {TableStyle} from "../amdinorder/ordertable/tablestyle";

export const BookTable:React.FC = ()=>{

    const [booktable ,setBooktable] = useState<BookinformationCard[]>()

  useEffect(()=>{
    axios.get('/api/v1/getbookinfo')
    .then(res=>setBooktable(res.data))
  },[])
    

//   console.log(booktable)

   
    return( 
        < >
         <Link to="/webadmin/book/add">Ավելացնել ինֆորմացիա</Link>
         <TableStyle>
            <AdminTableThead 
            titleone="Անուն" titletwo="Հեղինակ" titlwtree="Լեզու" titlefour="ամսաթիվ" titlefive="ավելին" 

            /> 
            <tbody>
              {
                  booktable?.map((bookdata,index)=>{
                      return(
                        <AdminTableTbody key={index}
                        infoone={bookdata.name_am} 
                        infotwo={bookdata.author_am} 
                        infotree={bookdata.Language_am}
                        infofour={bookdata.date} 
                        infofive={bookdata._id}
                        infourl={'/api/v1/bookdelete/'}
                       />
                      )
                  })
              }
          </tbody>
         </TableStyle>
      
        </>
    )
}