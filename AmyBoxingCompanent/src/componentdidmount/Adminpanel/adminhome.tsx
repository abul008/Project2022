import {AdminTable} from "./admintable";
import { Link } from "react-router-dom";


export const AdminPanel:React.FC = ()=>{
    return( 
        <div className="admin-panel" >
             <Link to="/webadmin/addbookinfo">bookinfo</Link>
             <Link to="/webadmin/addhomeinfo">homeinfo</Link>
             <Link to="/webadmin/addhomecarusel">homecaruselinfo</Link>
             <Link to="/webadmin/order">order</Link>
            <AdminTable />
        </div>
    )
}