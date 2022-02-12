import React from 'react';
import Classes from './Intro.module.scss';

const Intro = ({ isActive }) => (
  <div className={Classes.root}>
    <h1 className={`${Classes.title} ${isActive && 'animate__animated animate__slideInLeft'} `}>ALI ELZOHEIRY</h1>
  </div>
);

export default Intro;