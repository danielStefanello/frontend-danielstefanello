import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: grid;
  align-self: center;
  justify-content: space-around;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;
  list-style: none;
  font-size: 24px;
  max-width: 700px;

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

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  max-width: 700px;

  img {
    margin-top: 50px;
    width: 180px;
    border: 7px solid #999;
    border-radius: 50%;
  }

  span {
    height: 7px;
    background-color: #999;
    width: 100%;
    margin-top: 25px;
  }

  p {
    padding: 10px;
    text-align: justify;
  }
`;
