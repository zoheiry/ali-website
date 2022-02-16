import React, { ReactNode } from 'react';
import { TSlide } from '../../slidesConfig';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';

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
  };
  return (
    <div className={`${Classes.root} section`} style={style}>
      {background.video && <BackgroundVideo src={background.video} /> }
      <div className={Classes.content}>
        {children}
      </div>
    </div>
  );
};

export default Slide;