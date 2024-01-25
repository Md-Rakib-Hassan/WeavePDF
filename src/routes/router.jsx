import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import Subscriptions from "../pages/Subscriptions";
import Contact from './../pages/Contact';
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AllUsers from "../Pages/AllUsers/AllUsers";




  const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children: [

            {
              path: '/',
              element: <Home></Home>
            },

            {
              path:'subscriptions',
              element:<Subscriptions></Subscriptions>
            },
            {
              path:'/contact',
              element:<Contact></Contact>,
            },
            {
              path:'/login',
              element:<Login></Login>,
            },
            {
              path:'/register',
              element:<Registration></Registration>,
            },
            {
              path:'/all',
              element:<AllUsers></AllUsers>,
            },
        
          ]
        }

  ]);

  export default router;