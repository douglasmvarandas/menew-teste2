import React from 'react';

import { Container } from './styles';

import backgroundImg from '../../assets/images/Clouds.png';

const BackgroundImage: React.FC = () => {

  return (
    <Container source={backgroundImg} />
  );
};

export default BackgroundImage;