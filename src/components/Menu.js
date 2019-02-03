import React from 'react'
import { NavLink as RRNavLink} from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';


const Menu = () =>{
  return(
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="#">WheelThrive</NavbarBrand>
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={RRNavLink} exact to="/About" activeClassName="active">About</NavLink>
            </NavItem>
        </Nav>
      </Navbar>
  )
}
 
export default Menu