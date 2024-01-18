import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Subscriptions from "../pages/Subscriptions";
import Contact from './../pages/Contact';


  const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children: [
          
            
        ]
    },
    {
      path:'/subscriptions',
      element:<Subscriptions></Subscriptions>,
    },
    {
      path:'/contact',
      element:<Contact></Contact>,
    }
  ]);

  export default router;