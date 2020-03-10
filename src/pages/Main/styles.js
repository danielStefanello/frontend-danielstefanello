import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr 60px;
  align-self: center;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  font-size: 24px;
  /* max-width: 700px; */

  li {
    a {
      padding: 13px 20px;
      color: rgba(0, 0, 0, 0.5);

      &:hover {
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    box-sizing: border-box;
    width: 80%;
    padding: 10px;
    margin: 0 auto;
    max-width: 700px;
  }
`;

export const Footer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  /* max-width: 700px; */

  li {
    a {
      img {
        border-radius: 5px;
        opacity: 0.5;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
