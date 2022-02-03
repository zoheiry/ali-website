import { useEffect, useState, useRef } from 'react';

const DEFAULT_WRITING_SPEED = 20;

const useCssWriter = ({ htmlString, writingSpeed = DEFAULT_WRITING_SPEED, skipAnimation = false }) => {
  const [cursorIndex, setCursorIndex] = useState(0);
  const [writtenHtml, setWrittenHtml] = useState('');

  useEffect(() => {
    if (cursorIndex < htmlString.length) {
      if (skipAnimation) {
        setWrittenHtml(htmlString);
      } else {
        const nextLetter = htmlString[cursorIndex];
        setWrittenHtml(writtenHtml + nextLetter);
  
        setTimeout(() => {
          setCursorIndex(cursorIndex + 1);
        }, writingSpeed);
      }


    }
  }, [cursorIndex, skipAnimation]);

  return { writtenHtml };
};

export default useCssWriter;