import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faStackOverflow, faYoutube } from '@fortawesome/free-brands-svg-icons';

import Classes from './SocialLinks.module.scss';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

const LINKS = {
  LINKEDIN: 'https://www.linkedin.com/in/ali-elzoheiry-53650677',
  STACKOVERFLOW: 'https://stackoverflow.com/users/3481932/alizoh',
  GITHUB: 'https://github.com/zoheiry',
  YOUTUBE: 'https://www.youtube.com/@AliElZoheiry/'
};

type Props = {
  className?: string;
}

const SocialLinks = ({ className = '' }: Props) => (
  <ul className={`${Classes.root} ${className}`}>
    <li className={Classes.linkWrapper}>
      <a href={LINKS.LINKEDIN} target="_blank" rel="noreferrer" title="Linkedin">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </li>
    <li className={Classes.linkWrapper}>
      <a href={LINKS.STACKOVERFLOW} target="_blank" rel="noreferrer" title="StackOverflow">
        <FontAwesomeIcon icon={faStackOverflow} />
      </a>
    </li>
    <li className={Classes.linkWrapper}>
      <a href={LINKS.GITHUB} target="_blank" rel="noreferrer" title="Github">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </li>
    <li className={Classes.linkWrapper}>
      <a href={LINKS.YOUTUBE} target="_blank" rel="noreferrer" title="YouTube">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </li>
  </ul>
);

export default SocialLinks;