import styled from "styled-components";

export const FormComponentLogin = styled.form`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;

  span {
    text-align: center;
    font-size: 12px;
  }
`;

export const FooterSignin = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  a{
    font-size: 13px;
    text-decoration: none;
    color: #00A09A;
  }
  span{
    color: #ccc;
  }
`