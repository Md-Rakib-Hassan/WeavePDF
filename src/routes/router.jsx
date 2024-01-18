import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import Subscriptions from "../pages/Subscriptions";



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
            }
        
          ]
        }

  ]);

  export default router;