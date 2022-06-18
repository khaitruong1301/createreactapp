import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class UserManagement extends Component {


  render() {
    // if(!localStorage.getItem('userLogin')) {
      
    //   return <Navigate to="/" replace={false} />
    // }
  
    return (
      <div>
          <h3>admin/users</h3>
          <button onClick={()=>{
            return  <Navigate to="/" replace={false} />
          }}>Về trang chủ</button>
      </div>
    )
  }
}

