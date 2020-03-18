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

export const Categories = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  font-size: 24px;
  max-width: 700px;
  margin-top: 30px;

  li {
    flex: 1 1 230px;
    justify-content: space-between;
    padding: 10px;
    text-align: center;

    span {
      display: block;
      height: 25px;
      background-color: #999;
      margin-top: 20px;
    }
  }
`;

export const Techs = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin-top: 50px;
  padding: 10px;

  h3 {
    flex: 1 1 100%;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #999;
    color: #fff;
  }
`;
