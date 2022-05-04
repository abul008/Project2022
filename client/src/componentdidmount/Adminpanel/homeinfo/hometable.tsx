import { Link } from "react-router-dom";
import {AdminTableThead} from "../table/admintablethead";
import {AdminTableTbody} from "../table/adminTabletTbody";
import {TableStyle} from "../amdinorder/ordertable/tablestyle";
import {useTypedSelector} from "../../../hooks/userTypedSelector";
import {ErrorPage} from "../../Errorpage/Errorpage";
export const HomeTable:React.FC = ()=>{

    const {getHomedata} = useTypedSelector(state => state.home)

   
   

   
    return( 
        < >
         <Link to="/webadmin/home/add">Ավելացնել ինֆորմացիա</Link>
         <TableStyle>
            <AdminTableThead 
            titleone="Հեռախոսահամար" titletwo="Հեռախոսահամար" titlwtree="էլ- հասցե" titlefour="ամսաթիվ" titlefive="ավելին" 
            /> 
            <tbody>
              {
                  getHomedata?.map((homedata)=>{
                      return(
                        <AdminTableTbody key={homedata._id}
                        infoone={homedata.phone_number} 
                        infotwo={homedata.phone_number2} 
                        infotree={homedata.email}
                        infofour={homedata.createdAt} 
                        infofive={homedata._id}
                        files={[]}
                        infoubdate={'home/ubdate'}
                        infourl={'/api/v1/homedelete/'}
                       />
                      )
                  })
              }
          </tbody>
         </TableStyle>
      
        </>
    )
}