import React from 'react';
import BodyText from '../../BodyText/BodyText';

import Title from '../../Title/Title';

import Classes from './About.module.scss';

const About = () => (
  <div className={Classes.root}>
    <Title as="h2" className={Classes.title}>ABOUT <br /> ME</Title>
    <BodyText as="h3" className={Classes.content}>
      A curious problem seeker with <strong>8+ years of professional software engineering, management and leadership experience</strong>.
      <br />
      <br />
      Explored various industries including <u>travel</u>, <u>fashion</u>, <u>education</u> and <u>e-commerce</u>.
      <br />
      Helped <strong>build startups</strong> as well as <strong>lead and managed corporate teams</strong>.
      <br />
      <br />
      <i>&quot;I do my best to bring passionate infectious energy to all my teams and I am motivated by challenging problems&quot;</i>
    </BodyText>
  </div>
);

export default About;