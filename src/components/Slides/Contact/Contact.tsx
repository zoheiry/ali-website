import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import SocialLinks from '../../SocialLinks/SocialLinks';
import Title from '../../Title/Title';
import BodyText from '../../BodyText/BodyText';

import Classes from './Contact.module.scss';


const Contact = () => {
  return (
    <div className={Classes.root}>
      <Title className={Classes.title}>CONTACT <br /> ME</Title>

      <SocialLinks className={Classes.socialLinksWrapper} />

      <ul className={Classes.contactsList}>
        <li className={Classes.contactWrapper}>
          <a href="mailto:ali.elzoheiry@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className={Classes.icon} />
            <BodyText as="span">ali.elzoheiry@gmail.com</BodyText>
          </a>
        </li>
        <li className={Classes.contactWrapper}>
          <a href="tel:+31621372978">
            <FontAwesomeIcon icon={faPhone} className={Classes.icon} />
            <BodyText as="span">+31 (0)6 213 72 978</BodyText>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;