import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Course from './Component/Course'
import Login from './Login/Login'
import ClientLogin from './Client Login/ClientLogin'
import Signup from './Login/Signup'

const routes = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/course",
    element:<Course/>
  },
  {
    path:"/user/login",
    element:<Login/>
  },

  {
    path:"/user/signup",
    element:<Signup/>
  },
  {
    path:"/client/login",
    element:<ClientLogin/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
