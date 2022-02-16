import React, { useReducer } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Slide from './components/Slide/Slide';
import Intro from './components/Slides/Intro/Intro';
import About from './components/Slides/About/About';
import City from './components/Slides/City/City';
import Projects from './components/Slides/Projects/Projects';
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
    },
    {
      id: 'skills',
      background: {
        color: '#FFF0EC',
      },
      contentColor: '#7232F9',
    }
  ]
};


const reducer = (state, action) => {
  switch (action.type) {
  case 'GO_TO_SLIDE':
    return { ...state, activeSlideIndex: action.payload.slideIndex };
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  if (!state.slides?.length) {
    return null;
  }

  const slideIds = state.slides.map(slide => slide.id);

  return (
    <div className={Classes.root}>
      <NavIndicators
        numberOfSlides={state.slides?.length}
        activeSlideIndex={state.activeSlideIndex}
        contentColor={state.slides[state.activeSlideIndex].contentColor}
        slideIds={slideIds}
      />
      <ReactFullpage
        duration={600}
        easingcss3="ease"
        anchors={slideIds}
        normalScrollElements='.normalScroll'
        onLeave={(_, { index }) => { dispatch({ type: 'GO_TO_SLIDE', payload: { slideIndex: index } }); }}
        render={() => {
          return (
            <>
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
                <Slide {...state.slides?.[3]}>
                  <Projects />
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