import React from 'react';
import { Nav } from './Styles';
import { signUp, signIn } from '../../actions';
import { connect } from 'react-redux';
import axios from 'axios';


const NavBar = (props) => {

  const handleSignUp = async () => {
    await props.signUp({
      name: 'client',
      email: 'client@gmail.com',
      password: '123456'
    });
  }
  const handleSignIn = async () => {
    await props.signIn({
      email: 'client@gmail.com',
      password: '123456'
    });
  }

  return (
    <Nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="logo"><a href="/">Best To Do List</a></div>
          </div>
          <div className="auth-btns col-md-7">
            <button className="btn sign-up" onClick={handleSignUp}>Sign Up</button>
            <button className="btn sign-in" onClick={handleSignIn}>Sign In</button>
          </div>
        </div>
      </div>
    </Nav>
  )
};

const mapStateToProps = ({ authReducer }) => {
  console.log(authReducer)
  return {...authReducer}
};

export default connect(mapStateToProps, { signUp, signIn })(NavBar);
