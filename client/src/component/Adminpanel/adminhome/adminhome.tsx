import React from "react";
import "./adminhome.css";
import routesadmin from "../../config/admin";
import {AdminPanelNav} from "../adminnav/adminNav";

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


export const AdminPanel:React.FC = ()=>{
    return( 
        <Router>
        <div className="admin-panel" >
            
            {/* <HomeTable /> */}
            <AdminPanelNav />
            <Switch>  
              {routesadmin.map((route, index) => {
                        return (
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        );
                    })}
  
          </Switch>

        </div>
        </Router>
    )
}