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
                <Slide {...slidesConfig?.[0]} isActive={activeSlideIndex === 0}>
                  <Intro />
                </Slide>
                <Slide {...slidesConfig?.[1]} isActive={activeSlideIndex === 1}>
                  <About />
                </Slide>
                <Slide {...slidesConfig?.[2]} isActive={activeSlideIndex === 2}>
                  <City />
                </Slide>
                <Slide {...slidesConfig?.[3]} isActive={activeSlideIndex === 3}>
                  <Projects />
                </Slide>
                <Slide {...slidesConfig?.[4]} isActive={activeSlideIndex === 4}>
                  <Contact />
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