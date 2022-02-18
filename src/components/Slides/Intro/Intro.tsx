import React from 'react';

import Title from '../../Title/Title';
import SubTitle from '../../SubTitle/SubTitle';

import Classes from './Intro.module.scss';
import SocialLinks from '../../SocialLinks/SocialLinks';

const Intro = () => (
  <div className={Classes.root}>
    <Title className={Classes.title}>ALI <br /> ELZOHEIRY</Title>

    <SubTitle as="h2" className={Classes.subTitle}>Frontend Chapter Lead @ eBay</SubTitle>
    
    <SocialLinks className={Classes.socialLinksWrapper} />
  </div>
);

export default Intro;