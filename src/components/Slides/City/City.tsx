import React from 'react';

import Title from '../../Title/Title';

import Classes from './City.module.scss';

const City = () => (
  <div className={Classes.root}>
    <Title as="h2">LIVING IN <br /> AMSTER <br /> DAM</Title>
  </div>
);

export default City;