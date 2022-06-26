import React, { useEffect, StrictMode } from 'react'
import { Nav } from "../Nav"
import routes from '../config/client'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/userTypedSelector'
import { isAuth } from "../helpers/auth"
import { Footer } from "../Footer"
import { AdminPanel } from "../Adminpanel/adminhome/adminhome"
import { AdminLogin } from '../Adminpanel/adminlogin'
import { Loadpage } from '../loader'
import { ErrorPage } from '../Errorpage/index'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import "./style.css"

export const HeadPage: React.FC = () => {

  const {users} = useTypedSelector(state => state.user)
  const { setGetbookinfo ,fetchUsers } = useActions()

  useEffect( () => {
    if (isAuth('acessToken')) fetchUsers()

    setGetbookinfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   
  //this function shows the location of the home page routes
  return (
    <>
      <Router>
        <div className="wrapper-page">
          <Loadpage />
           <Nav /> 
           <StrictMode >
            <div className='header-section'>
              {/* <Shopicon /> */}
              <Switch>  
                {
                  routes.map( (route, index) => {
                    return (
                      <Route 
                         key={index}
                         path={route.path}
                         exact={route.exact}
                         component={route.component} />
                    )
                   }
                  )
                }        
                { 
                  users.userType === "admin" ?  
                  <Route 
                    path="/webadmin"
                    component={AdminPanel} /> :  
                  <Route   
                    path="/webadmin"
                    component={AdminLogin} />
                }
                  <Route
                    path='*'
                    component={ErrorPage} />
              </Switch>
            </div>
          </StrictMode>
          <Footer />    
        </div>
      </Router>
    </>
    )
  }