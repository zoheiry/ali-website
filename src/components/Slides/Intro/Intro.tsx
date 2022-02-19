import React from 'react';

import Title from '../../Title/Title';
import SubTitle from '../../SubTitle/SubTitle';

import Classes from './Intro.module.scss';
import SocialLinks from '../../SocialLinks/SocialLinks';
import BodyText from '../../BodyText/BodyText';

const Intro = () => (
  <div className={Classes.root}>
    <Title className={Classes.title}>ALI <br /> ELZOHEIRY</Title>

    <SubTitle as="h2" className={Classes.role}>Frontend Chapter Lead @ <u>eBay</u></SubTitle>
    <BodyText className={Classes.tagLine}>Software engineer, growth minded & curious</BodyText>
    
    <SocialLinks className={Classes.socialLinksWrapper} />
  </div>
);

export default Intro;