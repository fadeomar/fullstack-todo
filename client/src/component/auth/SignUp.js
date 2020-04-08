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
    // validations
    switch (name) {
      case 'name':
        setname(user.name);
        user.name.length < 3 ? setnameErr('Name must be at least 3 characters!') : setnameErr('');
        break;
      case 'email':
        setemail(user.email);
        !emailRegEx.test(user.email) ? setemailErr('Invalid Email!') : setemailErr('');
        break;
      case 'password':
        setpassword(user.password);
        user.password.length < 8 ? setpasswordErr('Password must be at least 8 characters!') : setpasswordErr('');
        break;
      case 'confPassword':
        setconfPassword(user.confPassword);
        user.confPassword !== password ? setconfPasswordErr('Passwords do not match!') : setconfPasswordErr('');
        break;
      default:
        break;
    }


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
