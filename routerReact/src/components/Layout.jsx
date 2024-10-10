import React from 'react'
import Header from './Headers/Header'
import Footer from './Footers/Footer'
import Home from './Home/Home'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout