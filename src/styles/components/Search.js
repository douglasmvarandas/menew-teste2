import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: hidden;

  .loader {
    width: 48px;
    height: 48px;
    margin: auto;
    border: 6px solid #04D361;
    border-radius: 50%;
    border-top: 6px solid #202024;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const SearchArea = styled.div`
  padding: 32px 0;
`;

export const Card = styled.div`
  background: #04D361;
  width: 720px;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto 32px;
  padding: 32px;
  border-radius: 32px;

  .teacher-image {
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    width: 85%;
    height: auto;
    display: block;
    margin: 0 auto 64px;
  }
`;

export const Texts = styled.div`
  display: block;
  text-align: left;
  margin: 47px 0 0 20px;

  .name {
    font-size: 24px;
    font-weight: 700;
    color: #121214;
  }

  .description {
    font-size: 14px;
    font-weight: 400;
    margin-top: 68px;
    color: #202024;
  }

  @media (max-width: 768px) {
    margin: 20px 0;
  
    .name {
      font-size: 20px;
    }

    .description {
      font-size: 14px;
      margin-top: 16px;
    }
  }
`;