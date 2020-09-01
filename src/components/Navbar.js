import React from 'react' 
import {NavLink} from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='navbar'>

        <NavLink 
          style={{ marginRight: '10px' }} 
          className='nav-link link-padding sm-link4'
          to="/"
        >
          Home
        </NavLink>
        <NavLink 
          className='nav-link link-padding sm-link4'
          style={{ marginRight: '10px' }} 
          to="/portfolio"
        >
          Portfolio
        </NavLink>
        <NavLink 
          style={{ marginRight: '10px' }} 
          className='nav-link link-padding sm-link4'
          to="/about"
        >
          About Me
        </NavLink>
        </div>
    )
}


export default Navbar