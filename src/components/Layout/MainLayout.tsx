import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Ui/Header'
import Footer from '../Ui/Footer'

const MainLayout = () => {
  return (
    <div className=' px-0 sm:px-4 md:px-6 lg:px-30 xl:px-30'>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default MainLayout