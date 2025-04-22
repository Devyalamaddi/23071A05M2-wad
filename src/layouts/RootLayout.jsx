import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main style={{minHeight:"80vh"}}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
