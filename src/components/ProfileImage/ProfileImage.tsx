import React from 'react';
import Classes from './ProfileImage.scss';

import profileImageSrc from '../../images/my-avatar.png';

const ProfileImage = () => (
  <div className={Classes.root}>
    <img src={profileImageSrc} />
  </div>
);

export default ProfileImage;
