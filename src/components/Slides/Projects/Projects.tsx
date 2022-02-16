import React from 'react';
import BodyText from '../../BodyText/BodyText';
import galaxyShooterPoster from '../../../images/project-posters/galaxy-shooter.png';
import evolvePoster from '../../../images/project-posters/evolve.jpg';
import reckonPoster from '../../../images/project-posters/reckon.png';
import transactionInsightsPoster from '../../../images/project-posters/transaction-insights.png';

import Title from '../../Title/Title';

import Classes from './Projects.module.scss';

const PROJECTS = [
  {
    name: 'GALAXY\nSHOOTER',
    link: 'https://github.com/zoheiry/galaxy-shooter',
    poster: {
      src: galaxyShooterPoster,
      backgroundStyles: {
        backgroundPosition: '50% 100%',
      },
    }
  },
  {
    name: 'EVOLVE',
    link: 'https://github.com/zoheiry/evolve',
    poster: {
      src: evolvePoster,
      backgroundStyles: {
        backgroundPosition: '100% 100%',
      },
    },
  },
  {
    name: 'RECKON',
    link: 'https://github.com/zoheiry/reckon-app',
    poster: {
      src: reckonPoster,
      backgroundStyles: {
        backgroundColor: '#823ffe'
      }
    }
  },
  {
    name: 'TRANSACTION\nINSIGHTS',
    link: 'https://github.com/zoheiry/transactions-parser',
    poster: {
      src: transactionInsightsPoster,
      backgroundStyles: {
        backgroundSize: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 90%',
        backgroundColor: '#5e3b43',
      }
    }
  }
];

const Projects = () => {
  return (
    <div className={Classes.root}>
      <div className={Classes.textContent}>
        <Title>SIDE <br /> PROJECTS</Title>
        <BodyText>Some random things I had fun building</BodyText>
      </div>
      <ul className={`${Classes.projectsList} normalScroll`}>
        {PROJECTS.map(({ name, link, poster }) => (
          <li className={Classes.projectCardWrapper} key={link}>
            <a
              className={Classes.projectCard}
              href={link}
              style={{ backgroundImage: `url("${poster.src}")`, ...(poster.backgroundStyles || {})}}
              target="_blank"
              rel="noreferrer"
            >
              <pre className={Classes.projectName}>{name}</pre>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;