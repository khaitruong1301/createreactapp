import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from '../components/HeaderHome'

export default function HomeLayout(props) {
  return (
    <div>
        <HeaderHome />
        <Outlet />
    </div>
  )
}
