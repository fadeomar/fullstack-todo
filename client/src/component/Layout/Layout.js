import React from 'react';
import NavBar from '../Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
        {children}
      <Footer />
    </Wrapper>
  )
}

export default Layout
