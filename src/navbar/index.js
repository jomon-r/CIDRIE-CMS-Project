import logo from './logo.png'
import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
  

const Navbar = () => {
    return (
        <>
        <Nav>
        <NavLink to="/">
          <h1><img src={logo} alt="logo" style={{height:50,width:50,margin:30}}/></h1>
          <Bars/>
          <NavMenu>
            <NavLink to="/Task" activeStyle>
              Task
            </NavLink>
            <NavLink to="/Alarms" activeStyle>
              Alarms
            </NavLink>
            <NavLink to="/Complaints" activeStyle>
              Complaints
            </NavLink>
            <NavLink to="/Master" activeStyle>
              Master
            </NavLink>
            <NavLink to="/Report" activeStyle>
              Report
            </NavLink>
            <NavLink to="/Settings" activeStyle>
              Settings
            </NavLink>
            <NavLink to="/SOS" activeStyle>
              SOS
            </NavLink>
            <NavLink to="/Users" activeStyle>
              Users
            </NavLink>
            <NavBtn>
                <NavBtnLink to='/Signout'>Sign Out</NavBtnLink>
             </NavBtn>
          </NavMenu>
          </NavLink>
      </Nav>
    </>
    );
};

export default Navbar;