import React from 'react';

import Classes from './NavIndicators.module.scss';

const NavIndicators = () => {
  return (
    <div className={Classes.root}>
      <div className={`${Classes.indicator} ${Classes.active}`} />
      <div className={Classes.indicator} />
      <div className={Classes.indicator} />
      <div className={Classes.indicator} />
      <div className={Classes.indicator} />
    </div>
  )
};

export default NavIndicators;