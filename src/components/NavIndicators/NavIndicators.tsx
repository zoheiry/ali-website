import React from 'react';
import { TSlide } from '../../slidesConfig';

import Classes from './NavIndicators.module.scss';

type Props = {
  activeSlideIndex: number;
  config: TSlide[];
}

const NavIndicators = ({ config, activeSlideIndex }: Props) => {
  return (
    <div className={Classes.root}>
      {config.map((slideConfig, index) => (
        <div className={`${Classes.indicator} ${activeSlideIndex === index && Classes.active}`} />  
      ))}
    </div>
  )
};

export default NavIndicators;