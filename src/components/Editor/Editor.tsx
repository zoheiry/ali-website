import React, { useState, useEffect } from 'react';

import Classes from './Editor.scss';

type props = {
  content: string;
}

const CSS = {
  BLOCK: {
    endChar: '}'
  },
  SELECTOR: {
    endChar: '{',
  },
  KEY: {
    endChar: ':',
  },
  RULE: {
    endChar: ';',
  }
};

const inclusiveSplit = (str, splitChar) => {
  const result = [];

  let subStr = '';
  for(let i = 0; i < str.length; i++) {
    const char = str[i];
    subStr += str[i];
    if (char === splitChar) {
      result.push(subStr);
      subStr = '';
    }

    if (i === str.length - 1) {
      result.push(subStr);
    }
  }
  return result;
};


// [
//   {
//     selector: '.intro',
//     rules: [
//       {
//         key: 'display',
//         value: 'flex',
//       }
//     ]
//   }
// ];

const parseCss = (cssString) => {
  const { BLOCK, SELECTOR, RULE, KEY } = CSS;

  const blocksArray = inclusiveSplit(cssString, BLOCK.endChar);

  return blocksArray.map((block) => {
    const [selector, lines = ''] = inclusiveSplit(block, SELECTOR.endChar);
    
    const rulesArray = inclusiveSplit(lines, RULE.endChar);
    const rules = rulesArray.map(rule => {
      const [ruleKey, ruleValue = ''] = inclusiveSplit(rule, KEY.endChar);
      return {
        key: ruleKey,
        value: ruleValue
      };
    });

    return {
      selector,
      rules,
    };
  });


  

  // const parsedCssArray: Array<{ type?: string, text: string }> = [{ type: 'selector', text: '' }];
  
  // for (let i = 0; i < cssString.length; i++) {
  //   const char = cssString[i];
  //   const currentCodeObject = parsedCssArray[parsedCssArray.length - 1];
  //   if (CSS_RULES[currentCodeObject.type]) {
  //     const { endChar, nextType } = CSS_RULES[currentCodeObject.type];
  //     if (char !== endChar) {
  //       currentCodeObject.text += char;
  //     } else {
  //       parsedCssArray.push({ text: endChar });
  //       parsedCssArray.push({ text: '', type: nextType });
  //     }
  //   } else {
  //     if (char === '\n' || char === ' ') {
  //       parsedCssArray.push({ text: char });
  //     } else {
  //       parsedCssArray.push({ text: currentCodeObject.text });
  //       if (char === '}') {
  //         parsedCssArray.push({ text: '}' });
  //         parsedCssArray.push({ text: '', type: 'selector' });
  //       } else {
  //         parsedCssArray.push({ text: char, type: 'key' });
  //       }
  //     }
  //   }
  // }

  // return parsedCssArray;
};

const Editor = ({ content }: props) => {
  const [parsedCode, setParsedCode] = useState([]);

  useEffect(() => {
    // TODO: Don't parse the entire content everytime, just parse the latest block to be faster
    const parsedCode = parseCss(content);
    setParsedCode(parsedCode);
  }, [content]);

  return(
    <div className={Classes.root}>
      <pre>
        {(parsedCode || []).map(({ selector, rules }, i) => (
          <>
            <span className={Classes.selector}>{selector}</span>
            <>
              {rules.map(({ key, value }) => (
                <>
                  <span className={Classes.key}>{key}</span>
                  <span className={Classes.value}>{value}</span>
                </>
              ))}
            </>
          </>
        ))}
      </pre>
    </div>
  );
};

export default Editor;