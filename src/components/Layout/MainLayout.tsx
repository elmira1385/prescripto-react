import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Ui/Header'
import Footer from '../Ui/Footer'

const MainLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout