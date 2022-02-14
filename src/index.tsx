import React from 'react';
import ReactDOM from 'react-dom';

import SlidesContext from './context/SlidesContext';
import slidesConfig from './slidesConfig';

import App from './App';
import './scss/index.scss';

ReactDOM.render(
  <SlidesContext.Provider value={slidesConfig}>
    <App name="Alizoh" />
  </SlidesContext.Provider>,
  document.querySelector('#root'),
);