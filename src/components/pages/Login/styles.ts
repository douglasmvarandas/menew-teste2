import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  .button-signUp {
    margin-top: 0.5rem;
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 370px;
  padding: 4rem 2rem;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;

  h1 {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    font-weight: 700;
  }

  @media (min-width: 460px) {
    margin-left: 5vw;
  }

  @media (max-width: 460px) {
    margin: 0 1rem;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;
