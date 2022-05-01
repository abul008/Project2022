
import axios from "axios";
import { useState } from "react";
import {SvgRefresh ,SvgDelete} from "../../svgicon/svg";

interface AdminTableTbodys{
 
    infoone:string,
    infotwo:string,
    infotree:string,
    infofour:string,
    infofive:string,
    infourl:string
}

export const AdminTableTbody:React.FC<AdminTableTbodys> = ({
    infoone,
    infotwo,
    infotree,
    infofour,
    infofive,
    infourl
})=>{

    

    const DeleteInfo =async (e:any)=>{
            
            try{
                 await axios.delete(`${infourl + e.target.id}`)
                 .then(res=>console.log(res.data))
    
            } catch(err){
              console.log(err)
            }
    }


    return( 
    
        <tr>
             <td>{infoone}</td>
             <td>{infotwo}</td>
             <td>{infotree}</td>
             <td>{infofour}</td>
             <td>
                 <span id={infofive} onClick={DeleteInfo} > 
                     <SvgRefresh  />
                 </ span>
                 <SvgDelete/>
              
                 </td>
         </tr>
   
    )
}