import {IRoute} from '../../types/index';
import {Bookinfoadd} from "../Adminpanel/bookinfoaddub/createbookinfo";
import {BookinfoUbdate} from "../Adminpanel/bookinfoaddub/bookubdate";
import {BookTable} from "../Adminpanel/bookinfoaddub/bookinfotable";
import {Homeinfo}  from "../Adminpanel/homeinfo/homeform";
import {HomeTable} from "../Adminpanel/homeinfo/hometable";
import {CaruselTable} from "../Adminpanel/homeinfo/carduseltable";
import {CaruselInfo} from "../Adminpanel/homeinfo/caruselimg";
import {OrderTable} from "../Adminpanel/amdinorder/adminorder";
import {Admindetalied} from "../Adminpanel/admindetaletion/detaliedinfo";

const routesadmin:IRoute[] = [

    {
        path: '/webadmin',
        name: 'admin page',
        component: HomeTable,
        exact: true
    },

    {
        path: '/webadmin/order/',
        name: 'create admin',
        component: OrderTable,
        exact: true
    },

    {
        path: '/webadmin/order/:id',
        name: 'delete admin',
        component: Admindetalied,
        exact: false
    },

    {
        path: '/webadmin/book/',
        name: 'bookinfo',
        component: BookTable,
        exact: true
    },

    {
        path: '/webadmin/book/create',
        name: 'bookinfo create',
        component: Bookinfoadd,
        exact: true
    },

    {
        path: '/webadmin/book/ubdate/:id',
        name: 'bookinfo create',
        component: BookinfoUbdate,
        exact: false
    },

    {
        path: '/webadmin/home',
        name: 'homeinfo ',
        component: HomeTable,
        exact: true
    },

    {
        path: '/webadmin/home/add',
        name: 'homeinfo ',
        component:Homeinfo ,
        exact: true
    },

    {
        path: '/webadmin/carusel/',
        name: 'homecarusel',
        component: CaruselTable,
        exact: true
    },

    {
        path: '/webadmin/carusel/add',
        name: 'homecarusel',
        component: CaruselInfo,
        exact: true
    },

    // {
    //     path: '*',
    //     name: 'error page',
    //     component: ErrorPage,
    //     exact: true
    // }, 
]

export default routesadmin