import React from 'react';

type props = {
  name: string;
};

const App = ({ name }: props) => {
  return <h1>Hello {name}</h1>;
};

export default App;