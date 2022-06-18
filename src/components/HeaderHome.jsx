import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class HeaderHome extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Cybersoft</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">

                    <NavLink 
                    className={({isActive}) => isActive ? 'nav-link bg-warning text-white' : 'nav-link'} 
                    to="/home" 
                    style={({isActive}) => isActive ? {color:'red'} : {}}>
                        Home 
                    </NavLink>

                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/shop">Shop</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/lifecycle">Lifecycle</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/form" >Form</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login" >Login</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sport</a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                        <a className="dropdown-item" href="#">Adidas</a>
                        <a className="dropdown-item" href="#">Nike</a>
                    </div>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    )
  }
}
