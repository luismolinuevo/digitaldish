import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Following from './Pages/Following/Following'
import Listing from './Pages/Listing/Listing'
import Signup from './Pages/Signup/Signup'
import Login from "../src/Pages/Login/Login"
import Logout from './Pages/Logout/Logout'
import './index.css'
import Layout from './Components/Layout'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/following",
        element: <Following />
      },
      {
        path: "/listing",
        element: <Listing />,
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/logout",
        element: <Logout />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
