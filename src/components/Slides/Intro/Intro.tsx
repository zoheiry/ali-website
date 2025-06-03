import React from 'react';

import Title from '../../Title/Title';
import SubTitle from '../../SubTitle/SubTitle';

import Classes from './Intro.module.scss';
import SocialLinks from '../../SocialLinks/SocialLinks';
import BodyText from '../../BodyText/BodyText';

const Intro = () => (
  <div className={Classes.root}>
    <Title className={Classes.title}>ALI <br /> ELZOHEIRY</Title>

    <SubTitle as="h2" className={Classes.role}>Owner of <a href="https://youtube.com/@alielzoheiry" target="_blank">Alizoh Studio</a></SubTitle>
    <BodyText className={Classes.tagLine}>Software Engineer, Educator, Game Developer & Content Creator</BodyText>
    
    <SocialLinks className={Classes.socialLinksWrapper} />
  </div>
);

export default Intro;