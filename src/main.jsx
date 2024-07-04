import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import JoinNow from './Pages/JoinNow/JoinNow';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
  },
  {path:"/login",
    element:<Login></Login>

  },
  {path: "/signup",
  element:<Signup></Signup>

  },
  {
path:'/join',
element: <JoinNow></JoinNow>
  },
  {
    path:'/dashboard',
    element: <Dashboard></Dashboard>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
