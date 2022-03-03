import IRoute from '../InterFace/routes';
import {Home} from "../HomePage/homePage";
import { AdminPanel } from '../Adminpanel/adminhome';
// import { AdminLogin } from '../Adminpanel/adminlogin';
// import {AdminRegister} from "../Adminpanel/adminregister";



const routesadmin:IRoute[] = [
  
    {
        path: '/webadmin',
        name: 'admin page',
        component: AdminPanel,
        exact: true
    }
  
    
 
]


export default routesadmin