import IRoute from '../InterFace/routes';
import {Home} from "../HomePage/homePage";
import { AdminPanel } from '../Adminpanel/adminhome/adminhome';
import { AdminLogin } from '../Adminpanel/adminlogin/adminlogin';
import { useTypedSelector } from '../../hooks/userTypedSelector';

// import { BookProduct } from '../BookPageScreen/bookPageProduct';
// import {Searchresult} from "../search/searchPage";
// import {ShopingList} from "../shopping/shoppingList";
// import {ErrorPage} from "../Errorpage/Errorpage";
// import { AdminLogin } from '../Adminpanel/adminlogin/adminlogin';
// import { isAuth } from '../helpers/auth';
import {Detailedinformation} from "../detailedinformation/detailedinformation";


const routeslogin: IRoute[] = [
 
    {
        path: '/webadmin',
        name: 'Home Page',
        component: Home,
        exact: true
    },
]



export default routeslogin;