import React from 'react';
import Classes from './App.scss';

type props = {
  name: string;
};

const App = ({ name }: props) => {
  return <h1 className={Classes.title}>Hello {name}</h1>;
};

export default App;