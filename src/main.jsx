import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routes/router'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProviders from './providers/AuthProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router}/>
   </AuthProviders>
  </React.StrictMode>,
)
