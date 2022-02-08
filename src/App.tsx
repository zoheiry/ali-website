import React, { useEffect } from 'react';
import { FullPage, Slide } from 'react-full-page';
import Classes from './App.module.scss';

const App = () => {
  return (
    <div className={Classes.root}>
      <FullPage>
        <Slide className={Classes.page}>
          <div>Page 1</div>
        </Slide>
        <Slide className={Classes.page}>
          <div>Page 2</div>
        </Slide>
      </FullPage>
    </div>
  );
};

export default App;