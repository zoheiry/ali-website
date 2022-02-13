import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons';

import Classes from './Intro.module.scss';

const LINKS = {
  LINKEDIN: 'https://www.linkedin.com/in/ali-elzoheiry-53650677',
  STACKOVERFLOW: 'https://stackoverflow.com/users/3481932/alizoh',
  GITHUB: 'https://github.com/zoheiry',
};

type Props = {
  isActive?: boolean;
}

const Intro = ({ isActive }: Props) => (
  <div className={Classes.root}>
    <h1 className={Classes.title}>ALI <br /> ELZOHEIRY</h1>

    <h2 className={Classes.subTitle}>Frontend Chapter Lead @ eBay</h2>

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