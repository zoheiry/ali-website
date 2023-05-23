import React from 'react';
import BodyText from '../../BodyText/BodyText';

import Title from '../../Title/Title';

import Classes from './About.module.scss';

const YEAR_OF_FIRST_JOB = 2013;
const YEARS_OF_EXPERIENCE = new Date().getFullYear() - YEAR_OF_FIRST_JOB;

const About = () => (
  <div className={Classes.root}>
    <Title as="h2" className={Classes.title}>ABOUT <br /> ME</Title>
    <BodyText as="h3" className={Classes.content}>
      A curious problem seeker with <strong>{YEARS_OF_EXPERIENCE}+ years of professional software engineering, management and leadership experience</strong>.
      <br />
      <br />
      Explored various industries including <u>travel</u>, <u>fashion</u>, <u>education</u> and <u>e-commerce</u>.
      <br />
      Helped <strong>build startups</strong> as well as <strong>lead and managed corporate teams</strong>.
      <br />
    </BodyText>
  </div>
);

export default About;