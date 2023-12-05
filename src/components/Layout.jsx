import React from 'react'
import {Toaster} from 'react-hot-toast'
import Header from './Header'

function Layout({children}) {
  return (
    <div>
      <Header/>
      <Toaster/>
      {children}
    </div>
  )
}

export default Layout