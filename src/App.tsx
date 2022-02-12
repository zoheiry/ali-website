import React, { useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Intro from './components/Intro/Intro';
import Slide from './components/Slide/Slide';

import Classes from './App.module.scss';

const App = () => {
  return (
    <div className={Classes.root}>
      <ReactFullpage duration={600}
        easingcss3="ease"
        onLeave={(_, { index }) => console.log(`going to slide ${index}`)}
        render={({ state, fullpageApi }) => {
          console.log(state);
          return (
            <ReactFullpage.Wrapper>
              <Slide>
                <Intro isActive={state.destination?.index === 0} />
              </Slide>
              <Slide>
                <Intro isActive={state.destination?.index === 1} />
              </Slide>
              <Slide>

              </Slide>
              <Slide>

              </Slide>
            </ReactFullpage.Wrapper>
          );
        }}
      />

    </div>
  );
};

export default App;