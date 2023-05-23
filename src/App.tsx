import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Slide from './components/Slide/Slide';
import NavIndicators from './components/NavIndicators/NavIndicators';

import slidesConfig from './slidesConfig';

const App = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const slideIds = slidesConfig.map(slide => slide.id);

  return (
    <div>
      <NavIndicators
        numberOfSlides={slidesConfig?.length}
        activeSlideIndex={activeSlideIndex}
        contentColor={slidesConfig[activeSlideIndex].contentColor}
        slideIds={slideIds}
      />
      <ReactFullpage
        licenseKey="gplv3-license"
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