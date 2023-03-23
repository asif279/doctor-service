import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from '../Pages/Dshboard/Dashboard/Dashboard';
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const router=createBrowserRouter([
    
    
    {
        path:'/',
        element:<Main/>,
        children:[
           {
            path:'/',
            element:<Home/>
           },
           {
            path:'/appointment',
            element:<Appointment></Appointment>
           },
           {
            path:'/login',
            element:<Login/>
           },
           {
            path:"/signup",
            element:<SignUp/>
           }
        ]
    }
    ,
    {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard/></PrivateRoute>
    }
])

export default router;