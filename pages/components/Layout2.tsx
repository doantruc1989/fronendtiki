import React from 'react'
import Footera from './Footer'
import Nav from './Nav'

const Layout2 = ({ children }: { children: React.ReactNode })  => {
  return (
    <>
    <Nav/>
    <main className="md:container md:mx-auto">{children}</main>
    <Footera/>
    </>
  )
}

export default Layout2