import { IRoute } from '../../../types/index'
import { Home, BookScreen, Searchresult, ShopingList, SingIn, Detailed, AdminLogin } from '../../index'

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
  component: BookScreen,
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
  component: Detailed,
  exact: false
},
{
  path: '/search/:id',
  name: 'Book Page',
  component: Searchresult,
  exact: false
}
]

export default routes;