import React from 'react';
import Classes from './App.scss';
import ProfileImage from './components/ProfileImage/ProfileImage';

const App = () => {
  return (
    <div className={Classes.root}>
      <div className={Classes.intro}>
        <div>
          <ProfileImage />
        </div>
        <p className={Classes.introText}>
          Hello, my name is Ali Elzoheiry, I am a software engineer with 8+ years of experience.
          <br />
          I love building products and working with fun and passionate people to bring our ideas to life.
        </p>
      </div>
    </div>
  );
};

export default App;