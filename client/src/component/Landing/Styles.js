import styled from 'styled-components';

export const Main = styled.div`
  background-image: url('../images/book.jpg');
  filter: saturate(200%);
  background-image:
  linear-gradient(rgba(1, 1, 1, 0.52), rgba(8,8,8, 0.73)),
  url('/../images/book.jpg');
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: bottom;

  .container-fluid {
    height: 100%;
  }
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .btn {
      cursor: pointer;
      border: 1px solid #06A82A;
      background: #FFFFFF;
      font-size: x-large;
      border-radius: 5px;
      color: #06A82A;
      font-weight: 600;
    }
  }
`;