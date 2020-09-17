import React, {useState} from 'react' 
import {NavLink} from 'react-router-dom'
import { Collapse, NavbarToggler, Navbar, Nav, NavItem, NavbarBrand} from 'reactstrap';


const CustomNavbar = (props) => {
  
  const isMobile = window.innerWidth <= 500;
  
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => setCollapsed(!collapsed)

  if (isMobile){
    return(

        <div >
        <Navbar color="faded" light expand='lg'>
          <NavbarBrand href="/" className="mr-auto">Ben W</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/" className='hamburger-link'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/portfolio" className='hamburger-link'>Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" className='hamburger-link'>About Me</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  } else {

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
}


export default CustomNavbar