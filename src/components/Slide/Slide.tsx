import React, { ReactNode } from 'react';

import Classes from './Slide.module.scss';

type Props = {
  children?: ReactNode;
}

const Slide = ({ children }: Props) => (
  <div className={`${Classes.root} section`}>
    <div className={Classes.content}>
      {children}
    </div>
  </div>
);

export default Slide;