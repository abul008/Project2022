import {useEffect ,StrictMode } from 'react';
import {Nav} from "../Nav/nav";
import routes from '../config/routes';
import { useActions } from '../../hooks/useActions';
import {Shopicon} from "../shopping/shopingicon";
import {Footer} from "../Footer/footer";
import "./clientPage.css";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";


export const ClientPage:React.FC=()=>{



    const {setGetbookinfo } = useActions()
    useEffect(()=>{
        setGetbookinfo()
    },[])
   

    return(
      <Router>
         <div className="wrapper-page">
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
          </Switch>
          </div>
          </StrictMode>
        <Footer />
         </div>
      </Router>
    )
  
  
  }