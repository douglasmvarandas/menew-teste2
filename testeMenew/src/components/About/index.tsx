import React from 'react';

import { Container, SpanTitle, Title, Description, BackButton, BackImg } from './styles';

import backIcon from '../../assets/images/back.png';

import { useNavigation } from '@react-navigation/native';

interface PropsAbout {
  span?: string;
  title: string;
  description?: string;
  back?: boolean;
}

const About: React.FC<PropsAbout> = ({ span, title, description, back }) => {

  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <>
      {back ? <BackButton onPress={handleGoBack}>
        <BackImg source={backIcon} resizeMode="contain" />
      </BackButton> : null }
      <Container>
        {span == undefined ? null : <SpanTitle>{span}</SpanTitle>}
        <Title>{title}</Title>
        {description == undefined ? null : <Description>{description}</Description>}
      </Container>
    </>
  );
};

export default About;