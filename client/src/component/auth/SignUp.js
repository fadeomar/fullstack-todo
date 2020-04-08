import React, {useState, useContext} from 'react';
import classnames from 'classnames';
import {NavLink} from 'react-router-dom';
import Layout from '../Layout/Layout';
import { AuthFormWrapper } from './Styles';
import { Context } from '../../context/authContext';

const SignUp = () => {
  const { state } = useContext(Context);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confPassword, setconfPassword] = useState('');
  const [nameErr, setnameErr] = useState('');
  const [emailErr, setemailErr] = useState('');
  const [passwordErr, setpasswordErr] = useState('');
  const [confPasswordErr, setconfPasswordErr] = useState('');
  const handleSignUp = () => {};
  const handleChange = (e) => {
    console.log('sssssss', e.target.name)
    const user = {};
    // email adress regx
    const emailRegEx = RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const name = e.target.name;


  };
  return (
    <Layout>
      <AuthFormWrapper>
      <h2 className="text-center">Create an Account</h2>
      <form className="mt-4" onSubmit={handleSignUp}>
        <div className="form-group">
        <label htmlFor="name">Enter Full Name</label>
            <input
              type="text"
              name="name"
              className={classnames(
                "form-control",
                { 'is-invalid': nameErr, 'is-valid': !nameErr && name.length }
              )}
              id="name"
              placeholder="Full Name"
              onChange={(e) => handleChange(e, 'name')}
            />
        </div>
        <input type="submit" className="btn btn-primary" value="Sign Up"/>
      </form>
      <p className="float-left">
          Already have an account? <NavLink to="signin">Sign In</NavLink>
        </p>
      </AuthFormWrapper>
    </Layout>
  )
}

export default SignUp;
