import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import JoinAsEmployee from '../Pages/JoinAsEmployee/JoinAsEmployee'
import JoinAsHr from "../Pages/JoinAsHr/JoinAsHr";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/joinAsEmployee',
            element:<JoinAsEmployee></JoinAsEmployee>
        },
        {
            path:'/joinAsHr',
            element:<JoinAsHr></JoinAsHr>
        },
       
    ]
}
])

export default router