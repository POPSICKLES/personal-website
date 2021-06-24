import '../css/Navbar.css'
import React from 'react'
import {
  NavLink,
} from 'react-router-dom'

const Navbar = (props) => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <ul id='nav'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/contests'>Contests</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar;