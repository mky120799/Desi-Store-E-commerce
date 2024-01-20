import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import './App.css';
import LoginPage from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';

import ProductDetailsPage from './pages/ProductDetailsPage';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<HomePage/>,
    },
    {
      path: "/login",
      element:<LoginPage/>,
    },
    {
      path: "/signUp",
      element:<SignUpPage/>,
    },
    {
      path:"/cart",
      element:<CartPage/>,
    },
    {
      path:"/checkout",
      element:<Checkout/>,
    },
    {
      path: '/product-detail/:id',
      element:<ProductDetailsPage/>,
    }
  ]);



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
