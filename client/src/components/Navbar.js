import React from 'react'
import {
  NavLink,
} from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
//import '../css/Navbar.css'

const Nbar = (props) => {
  return (
    <Navbar className='navbar' bg='dark' variant='dark'>
      <Nav className='mr-auto'>
        <NavItem>
          <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
        </NavItem>
        <NavItem>
          <Nav.Link as={NavLink} to='/projects'>Projects</Nav.Link>
        </NavItem>
        <NavItem>
          <Nav.Link as={NavLink} to='/contests'>Contests</Nav.Link>
        </NavItem>
      </Nav>
    </Navbar>
  )
}
export default Nbar;