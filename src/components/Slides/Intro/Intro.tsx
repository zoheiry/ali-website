import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';

import Title from '../../Title/Title';
import BodyText from '../../BodyText/BodyText';

import Classes from './Intro.module.scss';

const LINKS = {
  LINKEDIN: 'https://www.linkedin.com/in/ali-elzoheiry-53650677',
  STACKOVERFLOW: 'https://stackoverflow.com/users/3481932/alizoh',
  GITHUB: 'https://github.com/zoheiry',
};

const Intro = () => (
  <div className={Classes.root}>
    <Title>ALI <br /> ELZOHEIRY</Title>

    <BodyText as="h2" className={Classes.subTitle}>Frontend Chapter Lead @ eBay</BodyText>

    <ul className={Classes.links}>
      <li className={Classes.linkWrapper}>
        <a href={LINKS.LINKEDIN} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li className={Classes.linkWrapper}>
        <a href={LINKS.STACKOVERFLOW} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
      </li>
      <li className={Classes.linkWrapper}>
        <a href={LINKS.GITHUB} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>

    <div className={Classes.buttonWrapper}>
      <a download href="/ali-elzoheiry-cv.pdf" className={Classes.button}>
        DOWNLOAD CV
      </a>
    </div>
  </div>
);

export default Intro;