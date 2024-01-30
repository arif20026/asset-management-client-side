import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import JoinAsEmployee from '../Pages/JoinAsEmployee/JoinAsEmployee'
import JoinAsHr from "../Pages/JoinAsHr/JoinAsHr";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import EmployeeHome from "../Pages/Dashboard/EmployeeHome/EmployeeHome";
import Assets from "../Pages/Dashboard/Assets/Assets";
import Payment from "../Pages/Payment/Payment";
import Team from "../Pages/Dashboard/Team/Team";
import RequestAsset from "../Pages/Dashboard/RequestAsset/RequestAsset";
import CustomRequest from "../Pages/Dashboard/CustomRequest/CustomRequest";
import Profile from "../Pages/Dashboard/Profile/Profile";



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
},
{
    path:"dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
        {
            path:'home',
            element:<EmployeeHome></EmployeeHome>
        },
        {
            path:'assets',
            element:<Assets></Assets>
        },
        {
            path:'payment',
            element:<Payment></Payment>
        },
        {
            path:'team',
            element:<Team></Team>
        },
        {
            path:'requestAsset',
            element:<RequestAsset></RequestAsset>
        },
        {
            path:'customRequest',
            element:<CustomRequest></CustomRequest>
        },
        {
            path:'profile',
            element:<Profile></Profile>
        },
        {
            path:'adminHome',
            element:<Profile></Profile>
        },
        {
            path:'assetList',
            element:<Profile></Profile>
        },
        {
            path:'addAsset',
            element:<Profile></Profile>
        },
        {
            path:'allRequests',
            element:<Profile></Profile>
        },
        {
            path:'customRequests',
            element:<Profile></Profile>
        },
        {
            path:'employeeList',
            element:<Profile></Profile>
        },
        {
            path:'addEmployee',
            element:<Profile></Profile>
        },
        {
            path:'adminProfile',
            element:<Profile></Profile>
        },
    ]
}
])

export default router