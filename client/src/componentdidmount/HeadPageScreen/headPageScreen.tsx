import {useEffect ,StrictMode, useState } from 'react';
import {Nav} from "../Nav/nav";
import routes from '../config/routes';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/userTypedSelector';
import {Shopicon} from "../shopping/shopingicon";
import {isAuth} from "../helpers/auth";
import {Footer} from "../Footer/footer";
import {AdminPanel} from "../Adminpanel/adminhome/adminhome";
import { AdminLogin } from '../Adminpanel/adminlogin/adminlogin';
import { Loadpage } from '../loader/loadpage';
import { ErrorPage } from '../Errorpage/Errorpage';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import "./headPaheScreen.css";
import routesadmin from '../config/routesadmin';




// for(let i = 0 ;i < arrat.length ; i++ ){
//   for(let j = i + 1 ; j < arrat.length -1; j++ ){
//     if(arrat[i] >  arrat[j]){
//       [arrat[j],arrat[i]] = [arrat[i],arrat[j ]]     
//     }
 
//   }
 
// }


// arrat.find(2)

//   const functions = (arrats:any) =>{
      
//     arrats.map((data:any , index:number)=>{
//          return data.find(index)
//     })
//   }

//  functions(arrat)

export const HeadPage:React.FC<any>=()=>{



  const {users} = useTypedSelector(state => state.user)
  


    const { setGetbookinfo ,fetchUsers } = useActions()
    useEffect(()=>{
      if(isAuth('acessToken')){
         fetchUsers() 
      }
        setGetbookinfo()
    },[])
   



   
//this function shows the location of the home page routes

    return(
  
      <>
      <Router>
         <div className="wrapper-page">
         <Loadpage />
         <Nav /> 
         <StrictMode >
          <div className='header-section'>
          <Shopicon />
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
            { 
             users.userType === "admin" ?  
             <Route 
             path="/webadmin"
             component={AdminPanel}
             />   :  
             
             <Route   
             path="/webadmin"
             component={AdminLogin}  />}
             
             <Route
             path='*'
             component={ErrorPage}  
             />
          </Switch>
          </div>
          </StrictMode>
        <Footer />    
         </div>
      </Router>
  
      </>
    )
  
  
  }