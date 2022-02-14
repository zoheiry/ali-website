import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Intro from './components/Intro/Intro';
import Slide from './components/Slide/Slide';
import NavIndicators from './components/NavIndicators/NavIndicators';

import Classes from './App.module.scss';

const App = () => {
  return (
    <div className={Classes.root}>
      <NavIndicators />
      <ReactFullpage duration={600}
        easingcss3="ease"
        onLeave={(_, { index }) => console.log(`Going to slide ${index}`)}
        render={({ state, fullpageApi }) => {
          console.log(state);
          return (
            <ReactFullpage.Wrapper>
              <Slide>
                <Intro />
              </Slide>
              <Slide />
            </ReactFullpage.Wrapper>
          );
        }}
      />

    </div>
  );
};

export default App;