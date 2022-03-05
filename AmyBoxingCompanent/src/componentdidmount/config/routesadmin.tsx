import IRoute from '../InterFace/routes';
import {Home} from "../HomePage/homePage";
import { AdminPanel } from '../Adminpanel/adminhome';
import {addbookinfo} from "../Adminpanel/bookinfoaddub/createbookinfo"

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
        component: addbookinfo,
        exact: true
    }
  
    
 
]


export default routesadmin