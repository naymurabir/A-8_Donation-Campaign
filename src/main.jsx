import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home';
import DonationDetails from './components/DonationDetails/DonationDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Donation from './components/Donation/Donation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        loader: () => fetch('categories.json'),
        element: <DonationDetails></DonationDetails>
      },
      {
        path: '/donation',
        loader: () => fetch('categories.json'),
        element: <Donation></Donation>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
