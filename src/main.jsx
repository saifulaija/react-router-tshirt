import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Main/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import Contact from './components/Contact/Contact';
import Grandpa from './components/Grandpa/Grandpa';

 const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>,
    children :[
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch('data.json')
      },
      {
        path :'orders',
        element : <OrderReview></OrderReview>
      },
      {
        path:'grandpa',
        element:<Grandpa></Grandpa>
      },
      {
        path :'contact',
        element:<Contact></Contact>
      }
    ]
  }
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
