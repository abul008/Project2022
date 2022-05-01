import {useEffect} from 'react';
import AdminRoute from '../Routing/adminrouting';
import {Nav} from "../Nav/nav";
import routes from '../config/routes';
import { isAuth } from '../helpers/auth';
import {useTypedSelector} from "../../hooks/userTypedSelector";
import { useActions } from '../../hooks/useActions';
import {Shopicon} from "../shopping/shopingicon";
import routesadmin from "../config/routesadmin";
import {Footer} from "../Footer/footer";
import {ClientPage} from "../Routing/clinetPage";
import {AdminPage} from "../Routing/adminPage";
import {useHistory, useLocation} from 'react-router-dom';
import "./headPaheScreen.css";



export const HeadPage:React.FC=()=>{

  const locations:boolean = window.location.pathname.search('webadmin') > 0;

   
    const {setHomePage ,setGetbookinfo } = useActions()
    useEffect(()=>{
        setGetbookinfo()
    },[])
  
   
//this function shows the location of the home page routes

    return(
      <>
      {
      locations ? <AdminPage /> : <ClientPage /> 
      }
      </>
    )
  
  
  }