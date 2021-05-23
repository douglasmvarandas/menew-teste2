import styled from 'styled-components';

export const Container = styled.div`
  height: 128px;
  margin: 32px 128px;
  padding-bottom: 208px;
  overflow: hidden;

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon {
    width: 64px;
    height: 64px;
  }

  .name {
    font-size: 24px;
    font-weight: 700;
    margin-left: 20px;
    color: #E1E1E6;
  }

  .name-complement {
    font-weight: 400;
  }

  @media (max-width: 768px) {
    margin: 32px 0;
  }
`;