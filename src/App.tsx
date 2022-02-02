import React, { useState, useEffect } from 'react';
import Classes from './App.scss';

import html from './content/intro.raw.html';
import css from './content/intro.raw.css';
import useCssWriter from './hooks/useCssWriter';
import Editor from './components/Editor/Editor';
import profileImageSrc from './images/my-avatar.png';


const App = () => {
  const [skipAnimation, setSkipAnimation] = useState(false);
  const { writtenCss } = useCssWriter({ cssString: css, skipAnimation });

  useEffect(() => {
    const keyDownHandler = ({ key }) => {
      if (key === 'Escape') {
        setSkipAnimation(true);
      }
    };
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div className={Classes.root}>
      <div className="intro">
        <div>
          <div className="profileImageRoot">
            <img src={profileImageSrc} />
          </div>
        </div>
        <p className="introText">
          Hello, my name is Ali Elzoheiry, I am a software engineer with 8+ years of experience.
          <br />
          I love building products and working with fun and passionate people to bring our ideas to life.
        </p>
      </div>
      <Editor content={writtenCss} />
    </div>
  );
};

export default App;