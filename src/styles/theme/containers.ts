import { Col as ColBT, Row as RowBT } from 'react-bootstrap';
import styled from 'styled-components';

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1440px;
  height: auto;
  margin: 2% 5% 2% 5%;
  padding-top: 60px;
  /* margin-top: 60px; */
`;
export const BodyPage = styled.div`
  position: relative;
  width: 100%;
  height: 58vh;
  /* overflow-x: hidden; */
  /* border-bottom: 5px solid #e3e3e7; */
  padding: 0.5rem;
  z-index: 1 !important;
`;
export const Header = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin: 2rem 0 1rem 0; */

  h1 {
    font-weight: 700;
    color: #101010;
    font-size: 24px;
  }

  button {
    display: flex;
    width: 180px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    justify-content: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 0.5rem;
  margin: 2rem 0;
  align-items: flex-end;
  height: auto !important;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Row = styled(RowBT)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end !important;
`;

export const Col = styled(ColBT)`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

export const HeaderListCollapse = styled.div`
  display: flex;
  width: 100%;
  padding: 1.2rem 50px 1.2rem 2rem;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.04);
  align-items: center;
  z-index: 99;
  /* margin-bottom: 8px; */

  div > div {
    font-size: 12px;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    color: #505050;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      font-weight: 700;
    }
  }

  div > div > svg {
    margin-left: 0.5rem;
    color: #333;
  }
`;

export const ImageResultsContainer = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;

  span {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 3rem;
    color: #747985;
  }
`;

export const Spinner = styled.div`
  position: absolute;
  height: 100px;
  width: 100px;
  margin: 0px auto;
  -webkit-animation: rotation 0.6s infinite linear;
  -moz-animation: rotation 0.6s infinite linear;
  -o-animation: rotation 0.6s infinite linear;
  animation: rotation 0.6s infinite linear;
  border-left: 8px solid #ebebeb;
  border-right: 8px solid #ebebeb;
  border-bottom: 8px solid #ebebeb;
  border-top: 8px solid #005289;
  border-radius: 100%;
  @keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
    }
  }
`;

export const BoxLoading = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContentScroll = styled.div`
  max-height: 56vh;
  width: 100%;
  padding: 0 8px 0 5px;
  overflow-x: auto;

  & > div:nth-child(1),
  .MuiAccordion-root.Mui-expanded:nth-child(1) {
    margin-top: 1.2rem;
  }

  &::-webkit-scrollbar {
    width: 7px;
    height: 10px;
    margin: 5px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #eeeef8;
    margin: 5px;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #eeeef8;
    margin: 5px;
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #d9d9d9;
    border-radius: 10px;
    margin: 5px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 10px;
    margin: 5px;
  }
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 0 1.5rem 1rem 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e5e5;
`;

export const BoxInformations = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: space-between;
`;

export const Information = styled.div`
  max-width: 45%;
  p {
    font-weight: 600;
  }
  & + & {
    margin-left: 2rem;
  }
`;

export const Errors = styled.div``;

export const Buttons = styled.div`
  /* max-width: 10%; */
  display: flex;
  flex-direction: row;
  margin-left: 2rem;
  align-items: flex-start;

  div {
    align-items: flex-start !important;
    padding-top: 5px;

    & + div {
      margin-left: 8px;
    }
  }
`;

export const BoxButton = styled.div`
  display: flex;
  width: 105px !important;
  /* height: 100% !important; */
  align-items: flex-end !important;
  justify-content: space-between !important;
`;

export const BoxButton2 = styled.div`
  display: flex;
  width: auto !important;
  height: 100% !important;
  align-items: flex-end !important;
  justify-content: space-around !important;

  a + a {
    margin-left: 0.3rem;
  }
`;

export const ContainerForm = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  height: 100%;
  max-height: 700px;
  margin: 4% 8%;
  background: #fff;
  box-shadow: 0px 4px 27px 10px rgba(0, 0, 0, 0.04);
  border-radius: 30px;
  padding: 5%;
`;

export const RowTable = styled.div`
  background: transparent !important;
  border: 1.5px solid #d2d2d2;
  box-sizing: border-box;
  border-radius: 30px !important;
  box-shadow: none !important;
  margin: 0.5rem 0;
  padding: 5px 16px;

  div {
    display: flex;
  }
`;

export const Item = styled.span`
  overflow-wrap: anywhere !important;
`;
