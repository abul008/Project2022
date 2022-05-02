import { Link } from "react-router-dom";
import {NavAdminPage} from "./adminNavcss";
import "./adminNav.css";


export const AdminPanelNav:React.FC = ()=>{
    return( 
         <NavAdminPage >
            <nav>
              <ul>
                  <li><Link to="/webadmin/">Գլխաոր</Link></li> 
                  <li><Link to="/webadmin/book/">Գիրք</Link></li>
                  <li><Link to="/webadmin/carusel">Սլայդեռ</Link></li>
                  <li><Link to="/webadmin/order">Պատվեր</Link></li>
              </ul>
            </nav> 
        </ NavAdminPage >
    )
}