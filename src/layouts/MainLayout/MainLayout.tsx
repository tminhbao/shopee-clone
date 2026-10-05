import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout