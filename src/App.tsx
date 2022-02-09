import React, { useEffect } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import IntroSlide from './components/IntroSlide/IntroSlide';

import Classes from './App.module.scss';

const App = () => {
  return (
    <div className={Classes.root}>
      <ReactFullpage duration={600}
        easingcss3="ease-out"
        onLeave={(_, { index }) => console.log(`going to slide ${index}`)}
        render={({ state, fullpageApi }) => {
          console.log(state);
          return(
            <ReactFullpage.Wrapper>
              <div className={`${Classes.page} section`}>
                <pre>{JSON.stringify(state.origin?.index, null, 2)}</pre>
              </div>
              <div className={`${Classes.page} section`}>
                <pre>{JSON.stringify(state.origin?.index, null, 2)}</pre>
              </div>
              <div className={`${Classes.page} section`}>
                <pre>{JSON.stringify(state.origin?.index, null, 2)}</pre>
              </div>
              <div className={`${Classes.page} section`}>
                <pre>{JSON.stringify(state.origin?.index, null, 2)}</pre>
              </div>
            </ReactFullpage.Wrapper>
          );}}
      />
      
    </div>
  );
};

export default App;