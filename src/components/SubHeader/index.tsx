import React, { Children } from 'react';

import { Wrapper, Container } from './styles';

interface Props {
  children: any;
}

const SubHeader: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default SubHeader;
