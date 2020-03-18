import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  max-width: 700px;
  background-color: #fff;
  text-align: center;
  box-sizing: border-box;
  margin: 10px;
  border-radius: 4px;

  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    img {
      flex: 1 1 200px;
      width: 50%;
      height: 100%;
      border: 7px solid #999;
      margin: 5px;
      box-sizing: border-box;
    }
  }

  a {
    width: 100%;
    height: 30px;
    padding: 5px;
    background-color: #999;
    display: block;
    margin-top: 20px;
    text-decoration: none;
    border-radius: 4px;
    color: #fff;

    &:hover {
      background-color: #777;
    }
  }

  p {
    padding: 10px;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;

    li {
      padding: 10px;
    }
  }
`;
