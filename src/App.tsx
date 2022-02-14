import React, { useReducer, useContext } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import SlidesContext from './context/SlidesContext';

import Slide from './components/Slide/Slide';
import Intro from './components/Slides/Intro/Intro';
import About from './components/Slides/About/About';
import NavIndicators from './components/NavIndicators/NavIndicators';

import Classes from './App.module.scss';


const reducer = (state, action) => {
  switch (action.type) {
    case 'GO_TO_SLIDE':
      return { activeSlideIndex: action.payload.slideIndex }
  }
}

const App = () => {
  const slidesConfig = useContext(SlidesContext);
  const [state, dispatch] = useReducer(reducer, { activeSlideIndex: 0 });
  
  return (
    <div className={Classes.root}>
      <NavIndicators config={Object.values(slidesConfig)} activeSlideIndex={state.activeSlideIndex} />
      <ReactFullpage duration={600}
        easingcss3="ease"
        onLeave={(_, { index }) => dispatch({ type: 'GO_TO_SLIDE', payload: { slideIndex: index } })}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Slide {...slidesConfig.INTRO}>
                <Intro />
              </Slide>
              <Slide {...slidesConfig.ABOUT}>
                <About />
              </Slide>
              <Slide {...slidesConfig.CITY}>
                <About />
              </Slide>
            </ReactFullpage.Wrapper>
          );
        }}
      />

    </div>
  );
};

export default App;