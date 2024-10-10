import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/Home/About.jsx'
import Contactus from './components/Home/Contactus.jsx'
import User from './components/Home/User.jsx'
import Github, { GithubInfoLoader } from './components/Home/Github.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {path:"",
//         element:<Home/>
//       },{
//         path:"about",
//         element:<About />
//       },{
//         path:"contactus",
//         element:<Contactus />
//       }
//     ]
//   }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contactus' element={<Contactus />}/>
      <Route 
      loader={GithubInfoLoader}
      path='/github'
      element={<Github/> }/>
      <Route path='/user/:userid' element={<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
