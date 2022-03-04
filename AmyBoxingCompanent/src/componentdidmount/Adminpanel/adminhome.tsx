import {AdminTable} from "./admintable";
import { Link } from "react-router-dom";


export const AdminPanel:React.FC = ()=>{
    return( 
        <div className="admin-panel" >
             <Link to="/webadmin/addbookinfo">create</Link>
            <AdminTable />
        </div>
    )
}