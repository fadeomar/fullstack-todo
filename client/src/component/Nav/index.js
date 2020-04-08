import React from 'react';
import { Nav } from './Styles';
import { NavLink } from 'react-router-dom';



const NavBar = (props) => {


  return (
    <Nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="logo"><a href="/">Best To Do List</a></div>
          </div>
          <div className="auth-btns col-md-7">
            <NavLink to="/signup" >
            <button className="btn sign-up">Sign Up</button>
            </NavLink>
            <NavLink to="/signin" >
            <button className="btn sign-in">Sign In</button>
            </NavLink>
          </div>
        </div>
      </div>
    </Nav>
  )
};


export default NavBar;
