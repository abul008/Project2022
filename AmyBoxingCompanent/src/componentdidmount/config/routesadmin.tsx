import IRoute from '../InterFace/routes';
import {Home} from "../HomePage/homePage";
import { AdminPanel } from '../Adminpanel/adminhome';
import {Bookinfoadd} from "../Adminpanel/bookinfoaddub/createbookinfo"
import {Caruselinfo}  from "../Adminpanel/caruselinfo/caruselform";

const routesadmin:IRoute[] = [
    
    {
        path: '/webadmin',
        name: 'admin page',
        component: AdminPanel,
        exact: true
    },
    
    {
        path: '/webadmin/addbookinfo/',
        name: 'create admin',
        component: Bookinfoadd,
        exact: true
    },
       
    {
        path: '/webadmin/addcaruselinfo',
        name: 'create admin',
        component: Caruselinfo,
        exact: true
    }
  
    
 
]


export default routesadmin