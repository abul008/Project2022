import {useEffect} from 'react';
import AdminRoute from './adminrouting';
import { useActions } from '../../hooks/useActions';
import routesadmin from "../config/routesadmin";
import {AdminPanelNav} from "../Adminpanel/adminnav/adminNav";
import "./adminPage.css";
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";


export const AdminPage:React.FC=()=>{

 

    const {setHomePage ,setGetbookinfo } = useActions()
    useEffect(()=>{
        setGetbookinfo()
    },[])
   


    return(
      <Router>
         <div className="admin-head-page">
           <AdminPanelNav/>
           <div className='admin-table-section'>
             <Switch>        
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
           </div>
      </Router>
    )
  }