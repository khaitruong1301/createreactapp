import React from 'react'
import { Outlet } from 'react-router-dom'
import DashBoard from '../components/DashBoard'

export default function AdminLayout(props) {
  return (
    <div>
        <DashBoard />
        <Outlet />
    </div>
  )
}
