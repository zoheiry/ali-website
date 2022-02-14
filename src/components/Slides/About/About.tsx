import React from 'react';
import BodyText from '../../BodyText/BodyText';

import Title from '../../Title/Title';

import Classes from './About.module.scss';

const About = () => (
  <div className={Classes.root}>
    <Title as="h2">ABOUT <br /> ME</Title>
    <BodyText className={Classes.content}>
      I am a software engineer with 8+ years of professional experience.
      <br />
      <br />
      Passionate about web development with a focus on fullstack Javascript.
    </BodyText>
  </div>
);

export default About;