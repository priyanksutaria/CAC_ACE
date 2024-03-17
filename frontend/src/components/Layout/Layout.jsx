import React from 'react'
import Sidebar from '../../layout/Sidebar/Sidebar'
import ContentTop from '../ContentTop/ContentTop'

const Layout = ({children}) => {
  return (
    <div className='app'>
        <Sidebar />
        <div className='main-content'>
            <ContentTop />
            <div>{children}</div>
        </div>
      </div>
  )
}

export default Layout