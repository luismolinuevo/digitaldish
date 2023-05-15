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
import BidPage from "./Pages/Listing/BidPage"
import BarterPage from './Pages/Listing/BarterPage'

import { Provider } from 'react-redux'
import store from "./Utils/store"
import SpecificNegotiate from './Pages/Listing/SpecificNegotiate'
import SpecificBarter from './Pages/Listing/SpecificBarter'
import SpecificBid from './Pages/Listing/SpecificBid'
import OrderConformation from './Pages/Order/OrderConformation'

import OffersRecieved from './Pages/Activity/OffersRecieved'
import Activity from './Pages/Activity/Activity'


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
      },
      {
        path: "/activity",
        element: <Activity/>
      },








      {
        path: "/specneglisting/:id",
        element: <SpecificNegotiate/>
      },
      {
        path: "/specbarterlisting/:id",
        element: <SpecificBarter/>
      },  

      
     

      {
        path: "/specbidlisting/:id",
        element: <SpecificBid/>
      },
      {
        path: "orderconformation/:id",
        element: <OrderConformation/>

      },
  
   {
        path: "/listing",
        element: <Listing />,
        // children: [
        //   {
        //     path:"/listing/bidpage",
        //     element: <BidPage />
        //   }
        // ]
      },

      {
        path:"/listing/bidpage",
        element: <BidPage />
      },

      {
        path:"/listing/barterpage",
        element:<BarterPage />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
