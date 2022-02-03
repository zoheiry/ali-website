import { useEffect, useState, useRef } from 'react';

const DEFAULT_WRITING_SPEED = 20;

const useCssWriter = ({ cssString, writingSpeed = DEFAULT_WRITING_SPEED, skipAnimation = false }) => {
  const [cursorIndex, setCursorIndex] = useState(0);
  const [writtenCss, setWrittenCss] = useState('');
  const styleElement = useRef(null);

  useEffect(() => {
    styleElement.current = document.createElement('style');
    document.head.append(styleElement.current);
  }, []);

  useEffect(() => {
    if (cursorIndex < cssString.length) {
      if (skipAnimation) {
        styleElement.current.textContent = cssString;
        setWrittenCss(cssString);
      } else {
        const nextLetter = cssString[cursorIndex];
        styleElement.current.textContent += nextLetter;
        setWrittenCss(writtenCss + nextLetter);
  
        setTimeout(() => {
          setCursorIndex(cursorIndex + 1);
        }, writingSpeed);
      }


    }
  }, [cursorIndex, skipAnimation]);

  return { writtenCss };
};

export default useCssWriter;