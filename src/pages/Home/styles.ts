import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 3rem;
  width: 100%;
  margin-top: 60px;
  padding: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 667px) {
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
    grid-gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0;
    margin-top: 0;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 17px 5px rgba(0, 0, 0, 0.04);

  @media (max-width: 480px) {
    background-color: transparent;
    border-radius: 24px;
    width: 100%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;

  img {
    width: 100%;
    margin: 0;
    border-radius: 10px;
  }

  @media (max-width: 1080px) {
  }

  @media (max-width: 720px) {
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;

    img {
      margin: 0;
      border-radius: 0;
      width: 100%;
      height: auto;
    }
  }
`;

export const Description = styled.article`
  display: flex;
  flex-direction: column;
  height: auto;
  border-radius: 24px;
  background: #fff;
  padding: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 300;
  }

  span {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 800;
  }

  .MuiAccordion-root:before {
    display: none;
  }

  @media (max-width: 480px) {
    margin-top: -2rem;
    flex-direction: column;
    width: 100%;
    padding: 0;
    /* margin: 1rem; */

    article {
      padding: 2rem 2rem 0 2rem !important;
    }

    h2 {
      font-size: 1.6rem;
      font-weight: 300;
    }

    span {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 800;
    }
  }
`;
