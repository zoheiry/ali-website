import React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/scss/monokai-sublime.scss';

import Classes from './Editor.module.scss';

type props = {
  content: string;
}

const Editor = ({ content }: props) => {
  return(
    <div className={Classes.root}>
      <pre>
        <span dangerouslySetInnerHTML={{ __html: hljs.highlight(content, { language: 'css' }).value }} />
      </pre>
    </div>
  );
};

export default Editor;