import React from 'react';
import Classes from './Skills.module.scss';

const Skills = () => {

  const data = [
    { value: 'JavaScript', count: 100 },
    { value: 'React', count: 100 },
    { value: 'Node.js', count: 80 },
    { value: 'Express', count: 80 },
    { value: 'AngularJs', count: 20 },
    { value: 'Git', count: 90 },
    { value: 'Webpack', count: 80 },
    { value: 'npm & yarn', count: 70 },
    { value: 'Jest', count: 70 },
    { value: 'Ruby on Rails', count: 20 },
    { value: 'MongoDB', count: 30 },
    { value: 'Docker', count: 40 },
  ];

  // 100 = 20
  // 100x = 20
  // x = 20/100
  
  const max = 20;
  const min = 16;
  const range = max - min;

  return (
    <div className={Classes.root}>
      <div className={Classes.wordsWrapper}>
        {data.map(({ value, count }) => (
        <span
          className={Classes.word}
            style={{ fontSize: `${Math.floor(count * (range / 100)) + min}px`}}
          >
          {value}
          </span> 
        ))}
      </div>
    </div>
  );
};

export default Skills;

