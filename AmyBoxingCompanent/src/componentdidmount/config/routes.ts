import IRoute from '../InterFace/routes';
import {Home} from "../HomePage/homePage";
import { BookProduct } from '../BookPageScreen/bookPageProduct';
import { AdminLogin } from '../Adminpanel/adminlogin';




const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: Home,
        exact: true
    },
    {
        path: '/Book',
        name: 'Book Page',
        component: BookProduct,
        exact: true
    },
    {
        path: '/webadminlogin',
        name: 'admin Login',
        component: AdminLogin,
        exact: true
    }
    
    
 
]



export default routes;