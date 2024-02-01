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
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AssetList from "../Pages/Dashboard/AssetList/AssetList";
import AddAsset from "../Pages/Dashboard/AddAsset/AddAsset";
import AllRequests from "../Pages/Dashboard/AllRequests/AllRequests";
import EmployeeList from "../Pages/Dashboard/EmployeeList/EmployeeList";
import AddEmployee from "../Pages/Dashboard/AddEmployee/AddEmployee";
import AdminProfile from "../Pages/Dashboard/AdminProfile/AdminProfile";
import CustomRequestList from "../Pages/Dashboard/CustomRequestList/CustomRequestList";
import UpdateCustomRequest from "../Pages/Dashboard/EmployeeHome/UpdateCustomRequest";



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
        {
            path:'/updateRequest/:id',
            element:<UpdateCustomRequest></UpdateCustomRequest>,
            loader:({params})=>fetch(`http://localhost:5000/customRequests/${params.id}`)
        },
      
       
    ]
},
{
    path:"dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
        {
            path:'home',
            element:<EmployeeHome></EmployeeHome>,
           
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
            element:<AdminHome></AdminHome>
        },
        {
            path:'assetList',
            element:<AssetList></AssetList>
        },
        {
            path:'addAsset',
            element:<AddAsset></AddAsset>
        },
        {
            path:'allRequests',
            element:<AllRequests></AllRequests>
        },
        {
            path:'customRequests',
            element:<CustomRequestList></CustomRequestList>
        },
        {
            path:'employeeList',
            element:<EmployeeList></EmployeeList>
        },
        {
            path:'addEmployee',
            element:<AddEmployee></AddEmployee>
        },
        {
            path:'adminProfile',
            element:<AdminProfile></AdminProfile>
        },
    ]
}
])

export default router