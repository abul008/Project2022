// import {useTypedSelector} from "../../hooks/userTypedSelector";
// import { useActions } from '../../hooks/useActions';
import AdminRoute from '../Routing/adminrouting';
import {Nav} from "../Nav/navPage";
import routes from '../config/routes';
import routesadmin from "../config/routesadmin";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


export const HeadPage:React.FC=()=>{

//this function shows the location of the home page routes

    return(
      <Router>
         <div className="wrapper-page">
           <Nav />
             <Switch>
              {routes.map((route, index) => {
                        return (
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        );
                    })}
              {routesadmin.map((route, index) => {
                        return (
                            <AdminRoute 
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