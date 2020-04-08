import React from 'react';
import { Main } from './Styles';
import Navbar from '../Nav';

const Landing = () => {
  return (
    <>
    <Navbar />
      <Main>
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-12">
              <button className="btn">Get Started</button>
            </div>
          </div>
        </div>
      </Main>
    </>
  )
}

export default Landing;