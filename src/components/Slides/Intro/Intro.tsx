import React from 'react';

import Title from '../../Title/Title';
import BodyText from '../../BodyText/BodyText';

import Classes from './Intro.module.scss';
import SocialLinks from '../../SocialLinks/SocialLinks';

const Intro = () => (
  <div className={Classes.root}>
    <Title className={Classes.title}>ALI <br /> ELZOHEIRY</Title>

    <BodyText as="h2" className={Classes.subTitle}>Frontend Chapter Lead @ eBay</BodyText>
    
    <SocialLinks className={Classes.socialLinksWrapper} />

    <div className={Classes.buttonWrapper}>
      <a href="/ali-elzoheiry-cv.pdf" className={Classes.button} target="_blank">
        DOWNLOAD CV
      </a>
    </div>
  </div>
);

export default Intro;