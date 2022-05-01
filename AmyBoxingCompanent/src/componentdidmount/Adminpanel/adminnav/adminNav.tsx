import { Link } from "react-router-dom";
import {NavAdminPage} from "./adminNavcss";
import "./adminNav.css";


export const AdminPanelNav:React.FC = ()=>{
    return( 
         <NavAdminPage >
         <nav>
           <ul>
              <li><Link to="/webadmin/">home</Link></li> 
              <li><Link to="/webadmin/home/">homeinfo</Link></li>
              <li><Link to="/webadmin/book/">Գիրք</Link></li>
              <li><Link to="/webadmin/addhomecarusel">homecaruselinfo</Link></li>
              <li><Link to="/webadmin/order">order</Link></li>
          </ul>
        </nav> 
        </ NavAdminPage >
    )
}