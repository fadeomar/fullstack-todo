import React from 'react';
import NavBar from '../Nav';
import Footer from './Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

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
