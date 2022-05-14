import React from "react";
import { NavLink } from "react-router-dom";
import {NavAdminPage} from "./adminNavcss";
import "./adminNav.css";


export const AdminPanelNav:React.FC = ()=>{
   
    return( 
         <NavAdminPage>
            <nav>
              <ul>
                  <li><NavLink  activeClassName={'active-nav-admin'}  to="/webadmin/">Գլխաոր</NavLink></li> 
                  <li><NavLink data-testid="bookHref" activeClassName={'active-nav-admin'}    to="/webadmin/book/">Գիրք</NavLink></li>
                  <li><NavLink activeClassName={'active-nav-admin'}  to="/webadmin/carusel">Սլայդեռ</NavLink></li>
                  <li><NavLink activeClassName={'active-nav-admin'}  to="/webadmin/order">Պատվեր</NavLink></li>
              </ul>
            </nav> 
        </ NavAdminPage>
    )
}