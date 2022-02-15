import React, { ReactNode } from 'react';
import { TSlide } from '../../slidesConfig';

import Classes from './Slide.module.scss';

type Props = {
  children?: ReactNode;
  background: TSlide['background'];
  contentColor: string;
}

const Slide = ({ children, background, contentColor }: Props) => {
  const style = {
    color: contentColor,
    ...(background.image && { backgroundImage: `url("${background.image}")` }),
    ...(background.color && { backgroundColor: background.color }),
  }
  return (
    <div className={`${Classes.root} section`} style={style}>
      {background.video && (
        <video className={Classes.backgroundVideo} autoPlay loop muted data-keepplaying playsInline>
          <source src={background.video} type="video/mp4" />
        </video>
      )}
      <div className={Classes.content}>
        {children}
      </div>
    </div>
  );
}

export default Slide;