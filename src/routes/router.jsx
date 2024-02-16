import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import Subscriptions from "../pages/Subscriptions";
import Contact from "./../pages/Contact";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

import MergePdf from "../Pages/MergePdf/MergePdf";
import HtmlToPDF from "../Pages/HtmlToPDF/HtmlToPDF";
import DrawSignature from "../Pages/DrawSignature/DrawSignature";
import AddSignature from "../Pages/AddSignature/AddSignature";
import SplitPDF from "../Pages/SplitPDF/SplitPDF";
import SplitPDFModal from "../Pages/SplitPDF/SplitPDFModal/SplitPDFModal";

import Profile from "../Pages/Profile/Profile";
import WordToPDF from "../Pages/WordToPDF/WordToPDF";
import Editor from "../Pages/MdToPdf/Editor";
import MyTransection from "../Pages/Transection/MyTransection";
import AddFeedback from "../Pages/AddFeedBack/AddFeedback";
import RecentDocumentHistory from "../Pages/RecentDocumentHistory/RecentDocumentHistory";
import Dashboard from "../layout/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AdminEmail from "../Pages/Dashboard/AdminEmail/AdminEmail";
import ImageToPDF from "../Pages/ImageToPDF/ImageToPDF";
import UserSubscription from "../Pages/UserSubscription/UserSubscription";
import AddWatermark from "../Pages/AddWatermark/AddWatermark";
import EditPdf from "../Pages/EditPDF/EditPdf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/addWaterMark',
        element:<AddWatermark></AddWatermark>
      },

      {
        path: "/subscriptions",
        element: <Subscriptions></Subscriptions>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/merge-pdf",
        element: <MergePdf></MergePdf>,
      },
      {
        path: "/draw-signature",
        element: <DrawSignature></DrawSignature>,
      },
      {
        path: "/add-signature",
        element: <AddSignature></AddSignature>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/htmlToPdf",
        element: <HtmlToPDF></HtmlToPDF>,
      },
      {
        path: "/split-pdf",
        element: <SplitPDF></SplitPDF>,
      },
      {
        path: "/splitting-page",
        element: <SplitPDFModal></SplitPDFModal>,
      },
      {
        path: "/htmlToPdf",
        element: <HtmlToPDF></HtmlToPDF>,
      },
      {
        path: "/wordToPdf",
        element: <WordToPDF></WordToPDF>,
      },
      {
        path: '/imageToPdf',
        element: <ImageToPDF></ImageToPDF>
      },
      {
        path: "/md-to-pdf-editor",
        element: <Editor></Editor>,
      },
      {
        path: '/user-subscription',
        element:<PrivateRoute><UserSubscription></UserSubscription></PrivateRoute> 
      },
      {
        path: '/edit-pdf',
        element: <EditPdf></EditPdf>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // These routes for Common Users
      {
        path: '/dashboard/user-profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/all-services')
      },
      {
        path: '/dashboard/transection',
        element: <MyTransection></MyTransection>
      },
      {
        path: '/dashboard/addFeedback',
        element: <AddFeedback></AddFeedback>
      },
      {
        path: '/dashboard/document-history',
        element: <RecentDocumentHistory></RecentDocumentHistory>,
        loader: () => fetch('http://localhost:5000/user-services')
      },




      // These routes only for Admin
      {
        path: '/dashboard/allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: '/dashboard/adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: '/dashboard/adminEmail',
        element: <AdminRoute><AdminEmail></AdminEmail></AdminRoute>
      },
    ],
  },
]);

export default router;
