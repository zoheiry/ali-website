import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Slide from './components/Slide/Slide';
import Intro from './components/Slides/Intro/Intro';
import About from './components/Slides/About/About';
import City from './components/Slides/City/City';
import Projects from './components/Slides/Projects/Projects';
import Contact from './components/Slides/Contact/Contact';
import NavIndicators from './components/NavIndicators/NavIndicators';

import slidesConfig from './slidesConfig';

import Classes from './App.module.scss';

const App = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slideIds = slidesConfig.map(slide => slide.id);

  return (
    <div className={Classes.root}>
      <NavIndicators
        numberOfSlides={slidesConfig?.length}
        activeSlideIndex={activeSlideIndex}
        contentColor={slidesConfig[activeSlideIndex].contentColor}
        slideIds={slideIds}
      />
      <ReactFullpage
        duration={600}
        easingcss3="ease"
        anchors={slideIds}
        recordHistory={false}
        normalScrollElements='.normalScroll'
        onLeave={(_, { index }) => { setActiveSlideIndex(index); }}
        render={() => {
          return (
            <>
              <ReactFullpage.Wrapper>
                {slidesConfig.map((slide, slideIndex) => (
                  <Slide
                    key={slide.id}
                    background={slide.background}
                    contentColor={slide.contentColor}
                    isActive={activeSlideIndex === slideIndex}
                  >
                    <slide.Component />
                  </Slide>
                ))}
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />

    </div>
  );
};

export default App;