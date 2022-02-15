import React from 'react';

import Classes from './NavIndicators.module.scss';

type Props = {
  activeSlideIndex: number;
  numberOfSlides: number;
  contentColor: string;
  slideIds: string[];
}

const NavIndicators = ({ numberOfSlides, activeSlideIndex, contentColor, slideIds }: Props) => {
  return (
    <div className={Classes.root}>
      {Array(numberOfSlides).fill({}).map((_, index) => (
        <a
          href={`#${slideIds[index]}`}
          className={`${Classes.indicator}`}
          key={`nav-indicator-${index}`}
          style={{
            backgroundColor: activeSlideIndex === index ? 'transparent' : contentColor,
            borderColor: activeSlideIndex === index ? contentColor : 'transparent'
          }}
        />  
      ))}
    </div>
  )
};

export default NavIndicators;