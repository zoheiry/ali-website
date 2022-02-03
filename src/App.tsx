import React, { useState, useEffect } from 'react';
import Classes from './App.module.scss';

import html from './content/intro.raw.html';
import css from './content/intro.raw.css';

import useCssWriter from './hooks/useCssWriter';
import useHtmlWriter from './hooks/useHtmlWriter';

import Editor from './components/Editor/Editor';
import profileImageSrc from './images/my-avatar.png';


const App = () => {
  const [skipAnimation, setSkipAnimation] = useState(false);
  const { writtenHtml } = useHtmlWriter({ htmlString: html, skipAnimation });
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
      <div dangerouslySetInnerHTML={{ __html: writtenHtml }} />
      <Editor content={writtenCss} />
    </div>
  );
};

export default App;