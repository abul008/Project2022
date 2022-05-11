import IRoute from '../InterFace/routes';
import {Home} from "../HomePage/homePage";
import { BookProduct } from '../BookPageScreen/bookPageProduct';
import {Searchresult} from "../search/searchPage";
import {ShopingList} from "../shopping/shoppingList";
import {SingIn} from "../signIn/singup";
import {ErrorPage} from "../Errorpage/Errorpage";
import { AdminLogin } from '../Adminpanel/adminlogin/adminlogin';
import { isAuth } from '../helpers/auth';
import {Detailedinformation} from "../detailedinformation/detailedinformation";


const routes: IRoute[] = [
 
    {
        path: '/',
        name: 'Home Page',
        component: Home,
        exact: true
    },
    {
        path: '/singin',
        name: 'Home Page',
        component: SingIn,
        exact: true
    },
    {
        path: '/adminlogin',
        name: 'admin Login',
        component: AdminLogin ,
        exact: false
    },
    {
        path: '/Book/',
        name: 'Book Page',
        component: BookProduct,
        exact: true
    }, 
    {
        path: '/basket/:page',
        name: 'Basket',
        component: ShopingList,
        exact: true
    },
    {
        path: '/Book/:page/:id',
        name: 'Book Page',
        component: Detailedinformation,
        exact: false
    },
    {
        path: '/search/:id',
        name: 'Book Page',
        component: Searchresult,
        exact: false
    },
   
    // {
    //     path: '*',
    //     name: 'Home Page',
    //     component: ErrorPage,
    //     exact: true
    // },
]



export default routes;