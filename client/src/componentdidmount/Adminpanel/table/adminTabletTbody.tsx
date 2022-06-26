
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {SvgRefresh ,SvgDelete} from "../../svg";
import {FilesHref} from "../../../types/index";

interface AdminTableTbodys{
 
    infoone:string,
    infotwo:string,
    infotree:string,
    infofour:string,
    infofive:string,
    infourl:string,
    infoubdate:string,
    files:FilesHref[] 
}

interface TableDelete{
    deleteId: string ,
    filepath:string[] 
}

export const AdminTableTbody:React.FC<AdminTableTbodys> = ({
    infoone,
    infotwo,
    infotree,
    infofour,
    infofive,
    infourl,
    infoubdate,
    files
})=>{

    

    const DeleteInfo =async ()=>{
        
        const  data:TableDelete = {
            deleteId: infofive,
            filepath:files.map((data:FilesHref)=>data.filePath ) 
          }
            try{
                 await axios.delete(infourl , { data})
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
             <td style={{display:"flex"}}>
                <Link to={`${infoubdate}/${infofive}`}  > 
                     <SvgRefresh  />
                </ Link>
                <span  onClick={DeleteInfo}>
                  <SvgDelete  />
                </span>
                 </td>
         </tr>
   
    )
}