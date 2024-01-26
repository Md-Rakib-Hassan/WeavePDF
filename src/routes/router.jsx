import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Subscriptions from "../pages/Subscriptions";
import Contact from './../pages/Contact';
import MergePdf from "../Pages/MergePdf/MergePdf";
import DrawSignature from "../Pages/DrawSignature/DrawSignature";
import AddSignature from "../Pages/AddSignature/AddSignature";
import HtmlToPDF from "../Pages/HtmlToPDF/HtmlToPDF";


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
        path: 'subscriptions',
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
        path: '/htmlToPdf',
        element: <HtmlToPDF></HtmlToPDF>
      },
      {
        path: '/draw-signature',
        element: <DrawSignature></DrawSignature>
      },
      {
        path: '/add-signature',
        element: <AddSignature></AddSignature>
      }
    ]
  }

]);

export default router;