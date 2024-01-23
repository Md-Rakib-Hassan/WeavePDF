import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import Subscriptions from "../pages/Subscriptions";
import Contact from './../pages/Contact';
import MergePdf from "../Pages/MergePdf";



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
              path: '/merge-pdf',
              element: <MergePdf></MergePdf>
            }
        
          ]
        }

  ]);

  export default router;