import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 90vh;
  background: #f9ffff;
  position: relative;
`;

export const ProductsBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 85%;
  margin-top: 10px;
`;

export const SearchBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  justify-content: space-around;
  align-items: space-around;

  input{
    padding: 10px;
    width: 80%;

    @media (min-width: 426px){
      width: 300px;
    }
  }
`;