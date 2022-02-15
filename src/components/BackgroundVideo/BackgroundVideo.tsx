import React from 'react';

import Classes from './BackgroundVideo.module.scss';

type Props = {
  src: string;
  type?: string;
  showOverlay?: boolean;
}

const BackgroundVideo = ({ src, type = 'video/mp4', showOverlay = true } : Props) => (
  <div className={Classes.root}>
    {showOverlay && <div className={Classes.overlay} />}
    <video
      autoPlay
      loop
      muted
      data-keepplaying
      playsInline
    >
      <source src={src} type={type} />
    </video>
  </div>
);

export default BackgroundVideo;