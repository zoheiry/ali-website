import React, { useReducer, useContext } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import SlidesContext from './context/SlidesContext';

import Slide from './components/Slide/Slide';
import Intro from './components/Slides/Intro/Intro';
import About from './components/Slides/About/About';
import City from './components/Slides/City/City';
import NavIndicators from './components/NavIndicators/NavIndicators';
import amsterdamVideoSrc from './videos/amsterdam-bike-ride.mp4';

import Classes from './App.module.scss';

const initialState = {
  activeSlideIndex: 0,
  slides: [
    {
      id: 'intro',
      background: {
        color: '#F0E4FF',
      },
      contentColor: '#F95C32',
    },
    {
      id: 'about',
      background: {
        color: '#F95C32',
      },
      contentColor: '#F0E4FF',
    },
    {
      id: 'city',
      background: {
        video: amsterdamVideoSrc,
      },
      contentColor: '#FFFFFF',
    }
  ]
}


const reducer = (state, action) => {
  switch (action.type) {
    case 'GO_TO_SLIDE':
      return { ...state, activeSlideIndex: action.payload.slideIndex }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  if (!state.slides?.length) {
    return null;
  }

  return (
    <div className={Classes.root}>
      <ReactFullpage
        duration={600}
        easingcss3="ease"
        onLeave={(_, { index }) => { dispatch({ type: 'GO_TO_SLIDE', payload: { slideIndex: index } }) }}
        render={({ fullpageApi }) => {
          return (
            <>
              <NavIndicators
                onNavigate={fullpageApi?.moveTo}
                numberOfSlides={state.slides?.length}
                activeSlideIndex={state.activeSlideIndex}
                contentColor={state.slides[state.activeSlideIndex].contentColor}
              />
              <ReactFullpage.Wrapper>
                <Slide {...state.slides?.[0]}>
                  <Intro />
                </Slide>
                <Slide {...state.slides?.[1]}>
                  <About />
                </Slide>
                <Slide {...state.slides?.[2]}>
                  <City />
                </Slide>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />

    </div>
  );
};

export default App;