import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import styled from 'styled-components';

export const AccordionContainer = styled(Accordion)`
  background: transparent !important;
  border: none;
  box-sizing: border-box;
  box-shadow: none !important;
  align-items: center;
  span {
    margin-top: 0 !important;
  }
  & svg {
    color: #5e5e5e;
    pointer-events: visible;
    font-size: 20px;
  }
  .MuiAccordionSummary-root {
    height: 1rem;
  }

  .MuiAccordionSummary-content.Mui-expanded {
    margin: 0 !important;
  }
  .MuiAccordionSummary-root {
    padding: 0 1rem 0 0 !important;
  }

  @media (max-width: 480px) {
    .MuiAccordionSummary-root {
      /* padding: 0 16px !important; */
    }
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  @media (max-width: 480px) {
    padding: 0 2rem !important;
  }
`;

export const Details = styled(AccordionDetails)`
  line-height: 1.4rem;
  background: #fff !important;
  padding: 0 !important;
  padding-bottom: 1rem;
  flex-direction: column;
  font-size: 1rem;
  color: #5e5e5e;
  border-radius: 24px;

  @media (max-width: 480px) {
    padding: 0 2rem 2rem 2rem !important;
  }
`;
