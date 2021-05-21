import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: hidden;
`;

export const Dashboard = styled.div`
  max-width: 684px;
  display: block;
  margin: 32px auto 0;
  text-align: center;

  .title {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 32px;
    color: #E1E1E6;
  }

  .title-green {
    color: #04D361;
  }

  .subtitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 65px;
    color: #A8A8B3;
  }

  .subtitle-green {
    color: #04D361;
  }

  @media (max-width: 1024px) {
    padding: 0 32px;
  }

  @media (max-width: 768px) {
    padding-bottom: 128px;

    .title {
      font-size: 30px;
    }

    .subtitle {
      font-size: 16 px;
      color: #A8A8B3;
    }
  }
`;

export const Discover = styled.div`
  background: #04D361;
  width: 350px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 64px;
  cursor: pointer;

  .search {
    display: block;
    text-align: center;
    text-decoration: none;
  }

  .text-primary {
    font-size: 20px;
    font-weight: 700;
    color: #121214;
  }

  .text-secondary {
    font-size: 16px;
    font-weight: 400;
    color: #202024;
  }

  .explore-icon {
    width: 48px;
    height: 48px;
    margin-left: 10px;
    color: #121214;
  }

  @media (max-width: 768px) {
    width: 210px;
    height: 56px;
    padding: 6px 30px;
    display: block;

    .text-primary {
      font-size: 12px;
    }

    .text-secondary {
      font-size: 10px;
    }

    .explore-icon {
      display: none;
    }
  }
`;
