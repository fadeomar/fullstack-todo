import styled from 'styled-components';

export const Nav = styled.nav`
  display: inline-block;
  width: 100%;
  height: 60px;
  color: #fff;
  background-color: #06A82A;
  .row {
    display: flex;
    .col-md-5 {
      width: 70%;
    };
    .col-md-7 {
      width: 28%;
    }
  };
  .logo {
    font-family: Lora;
    font-style: italic;
    font-weight: bold;
    line-height: 55px;
    font-size: xx-large;
    a {
      text-decoration: none;
      color: #ffffff;
    }
  }
  .auth-btns {
    .btn {
      float: right;
      color: #fff;
      font-weight: 600;
      cursor: pointer;
    }
    .sign-in {
      line-height: 45px;
      background: transparent;
      border : none;
      padding: 5px 10px;
    }
    .sign-up {
      height: 30px;
      width: 80px;
      background: rgba(255, 215, 3, 0.25);
      border: 1px solid #07709D;
      border-radius: 5px;
      padding: 3px;
      margin-top: 15px;
    }
  }
`;