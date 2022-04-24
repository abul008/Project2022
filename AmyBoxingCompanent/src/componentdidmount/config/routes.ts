import IRoute from '../InterFace/routes';
import {Home} from "../HomePage/homePage";
import { BookProduct } from '../BookPageScreen/bookPageProduct';
import {Searchresult} from "../search/searchPage";
import {ShopingList} from "../shopping/shoppingList";
import {Shop} from "../shopping/shop";
import { AdminLogin } from '../Adminpanel/adminlogin';
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
        path: '/Book/',
        name: 'Book Page',
        component: BookProduct,
        exact: true
    }, 
    {
        path: '/basket/',
        name: 'Basket',
        component: Shop,
        exact: true
    },
    {
        path: '/Book/:page/:id',
        name: 'Book Page',
        component: Detailedinformation,
        exact: true
    },
    {
        path: '/search/:id',
        name: 'Book Page',
        component: Searchresult,
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