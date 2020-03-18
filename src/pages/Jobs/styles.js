import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    flex: 1 1 250px;
    height: 250px;
    background-size: cover;
    background-position: center;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      opacity: 0;
      font-size: 24px;
      cursor: pointer;
      text-decoration: none;
      color: #000;

      &:hover {
        opacity: 1;
        background-color: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;

export const GoBack = styled.div`
  font-size: 24px;
  height: 40px;
  a {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 5px;
    text-decoration: none;
  }
`;
