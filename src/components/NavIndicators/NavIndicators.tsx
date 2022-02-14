import React from 'react';

import Classes from './NavIndicators.module.scss';

type Props = {
  activeSlideIndex: number;
  numberOfSlides: number;
  contentColor: string;
  onNavigate: (number) => void;
}

const NavIndicators = ({ numberOfSlides, activeSlideIndex, contentColor, onNavigate }: Props) => {
  return (
    <div className={Classes.root} style={{ top: `${100 * activeSlideIndex}vh` }}>
      {Array(numberOfSlides).fill({}).map((_, index) => (
        <div
          className={`${Classes.indicator}`}
          onClick={() => onNavigate(index + 1)}
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