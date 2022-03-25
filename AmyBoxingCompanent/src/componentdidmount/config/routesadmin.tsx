import IRoute from '../InterFace/routes';
import {Home} from "../HomePage/homePage";
import { AdminPanel } from '../Adminpanel/adminhome';
import {Bookinfoadd} from "../Adminpanel/bookinfoaddub/createbookinfo"
import {Homeinfo}  from "../Adminpanel/homeinfo/homeform";
import {CaruselInfo} from "../Adminpanel/homeinfo/caruselimg";
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
        path: '/webadmin/addhomeinfo',
        name: 'create admin',
        component: Homeinfo,
        exact: true
    },
    {
        path: '/webadmin/addhomecarusel',
        name: 'create admin',
        component: CaruselInfo,
        exact: true
    }
  
    
 
]


export default routesadmin