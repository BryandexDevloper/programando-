import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter,RouterProvider,Navigate} from 'react-router-dom'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import ErrorPage from './components/pages/ErrorPage.jsx'
import ContactDetails from './components/pages/ContactDetails.jsx'
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Home/>
//   },{
//     path:'/contato',
//     element:<Contact/>
//   }
// ])



const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[ 
    {//outlet
      path:'contact',
      element:<Contact/>
    },{
      path:'/',
      element:<Home/>
    },{
    path:'/contato',
    element:<Contact/>
    },
    //nested route
    {//rotas dinamicas
      path:'/contact/:id/:nome/:telefone',
      element:<ContactDetails/>
    },//navigação para paginas nao existentes
    {
      path:'oldContact',// essa pagina nao existe 
      element:<Navigate to='/contato'/> // o hook manda para essa
    }
  ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
