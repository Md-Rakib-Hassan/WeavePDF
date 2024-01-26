import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Subscriptions from "../pages/Subscriptions";
import Contact from './../pages/Contact';
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AllUsers from "../Pages/AllUsers/AllUsers";
import MergePdf from "../Pages/MergePdf/MergePdf";
import HtmlToPDF from "../Pages/HtmlToPDF/HtmlToPDF";
import DrawSignature from "../Pages/DrawSignature/DrawSignature";
import AddSignature from "../Pages/AddSignature/AddSignature";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/subscriptions',
        element: <Subscriptions></Subscriptions>
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/merge-pdf',
        element: <MergePdf></MergePdf>
      },
      {
        path: '/draw-signature',
        element: <DrawSignature></DrawSignature>
      },
      {
        path: '/add-signature',
        element: <AddSignature></AddSignature>
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Registration></Registration>,
      },
      {
        path: '/all',
        element: <AllUsers></AllUsers>,
      },
      {
        path: '/htmlToPdf',
        element: <HtmlToPDF></HtmlToPDF>
      }
    ]
  }


]);


export default router;