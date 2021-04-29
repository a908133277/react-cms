import Login from '../view/Login'
import Home from '../view/Home'
import Category from '../view/Category'
import Product from '../view/Product'
import Role from '../view/Role'
import User from '../view/User'
import Addupdate from '../view/Product/Addupdate'
import Detail from '../view/Product/Detail'
const routes = [
    {
        path : '/login',
        component : Login,
        Auth : true,
        exact: true
    },
    {
        path : '/home',
        component : Home,
        Auth : false,
        exact: true
    },
    {
        path : '/category',
        component : Category,
        Auth : false,
        exact: true
    },
    {
        path : '/product',
        component : Product,
        Auth : false,
        exact: true
    },
    {
        path : '/product/addupdate',
        component : Addupdate,
        Auth : false,
        exact: true
    },
    {
        path : '/product/detail',
        component : Detail,
        Auth : false,
        exact: true
    },
    {
        path : '/role',
        component : Role,
        Auth : false,
        exact: true
    },
    {
        path : '/user',
        component : User,
        Auth : false,
        exact: true
    }
]
export default routes