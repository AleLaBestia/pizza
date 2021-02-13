import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarElements'

function Navbar() {
    return (
        <>
            <Nav>
              <NavLink to='/'>Pizza</NavLink>
              <NavIcon>
                 <p>menu</p> 
                  <Bars/>
              </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
