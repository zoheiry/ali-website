import React from 'react';

import Classes from './BackgroundVideo.module.scss';

type Props = {
  src: string;
  type?: string;
}

const BackgroundVideo = ({ src, type = 'video/mp4' } : Props) => (
  <video
    className={Classes.root}
    autoPlay
    loop
    muted
    data-keepplaying
    playsInline
  >
    <source src={src} type={type} />
  </video>
);

export default BackgroundVideo;