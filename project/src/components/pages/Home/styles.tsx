import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;

  margin-top: 8rem;
  padding-bottom: 2.5rem;
`;

export const GridProducts = styled.div`
  display: grid;
  gap: 2rem;

  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  align-items: center;

  @media (min-width: 1365px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1364px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1035px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .product {
    padding-top: 0.5rem;
    min-width: 280px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
    border-radius: 4px;
    color: white;

    order: reverse;
    cursor: pointer;

    img {
      max-width: 280px;
      height: 200px;
      padding: 1rem;
    }

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.4);
    }

    span {
      margin: 0 1rem;
      display: flex;

      text-align: justify;
    }
  }
`;
