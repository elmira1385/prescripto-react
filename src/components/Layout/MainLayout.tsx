import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <>
    <p>header</p>
    <Outlet/>
    </>
  )
}

export default MainLayout