import IRoute from '../InterFace/routes';
import {Home} from "../HomePage/homePage";
import { BookProduct } from '../BookPageScreen/bookPageProduct';
import { AdminLogin } from '../Adminpanel/adminlogin';
import { isAuth } from '../helpers/auth';


const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: Home,
        exact: true
    },
    {
        path: '/Book/name',
        name: 'Book Page',
        component: BookProduct,
        exact: true
    },
    {
        path: '/webadminlogin',
        name: 'admin Login',
        component:isAuth("role") ?  Home : AdminLogin ,
        exact: true
    }
]



export default routes;