import React from 'react'
import { Outlet } from 'react-router-dom'

const MainHeader = () => {
  return (
    <div>
    {/* to render child routes */}
      <Outlet/>
    </div>
  )
}

export default MainHeader
