import React from 'react'
import {
  NavLink,
} from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <ul>
        <li><NavLink className='nav-link' exact to='/' activeClassName='active'>Home</NavLink></li>
        <li><NavLink className='nav-link' exact to='/projects' activeClassName='active'>Projects</NavLink></li>
        <li><NavLink className='nav-link' exact to='/contests' activeClassName='active'>Contests</NavLink></li>
      </ul>
    </div>
  )
}
export default Navbar;