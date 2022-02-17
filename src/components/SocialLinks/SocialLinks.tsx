import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

import Classes from './SocialLinks.module.scss';

const LINKS = {
  LINKEDIN: 'https://www.linkedin.com/in/ali-elzoheiry-53650677',
  STACKOVERFLOW: 'https://stackoverflow.com/users/3481932/alizoh',
  GITHUB: 'https://github.com/zoheiry',
};

type Props = {
  className?: string;
}

const SocialLinks = ({ className = '' }: Props) => (
  <ul className={`${Classes.root} ${className}`}>
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
);

export default SocialLinks;