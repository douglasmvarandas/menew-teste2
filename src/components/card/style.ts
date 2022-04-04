import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 480px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
  margin: 10px;
  padding: 5px;
  text-align: center;
  background: #ffffff;

  img{
    width: 90%;
    height: 75%;
  }

  span {
    margin: 5px 0;
  }

  button{
    margin: 5px 0;
    width: 100%;
  }
`;