import IRoute from '../InterFace/routes';
import {Home} from "../HomePage/homePage";
import { BookProduct } from '../BookPageScreen/bookPageProduct';
import { AdminPanel } from '../Adminpanel/adminhome';
import { AdminLogin } from '../Adminpanel/adminlogin';



const routesadmin:IRoute[] = [
  
    {
        path: '/webadmin',
        name: 'admin page',
        component: AdminPanel,
        exact: true
    }
  
    
 
]


export default routesadmin