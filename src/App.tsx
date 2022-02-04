import React from 'react';
import Classes from './App.module.scss';
import profileImageSrc from './images/my-avatar.png';


const App = () => {
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
    </div>
  );
};

export default App;