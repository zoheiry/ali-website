import React, {useRef, useState} from 'react';
import BodyText from '../../BodyText/BodyText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import galaxyShooterPoster from '../../../images/project-posters/galaxy-shooter.png';
import evolvePoster from '../../../images/project-posters/evolve.jpg';
import reckonPoster from '../../../images/project-posters/reckon.png';
import transactionInsightsPoster from '../../../images/project-posters/transaction-insights.png';
import youTubePoster from '../../../images/project-posters/youtube.png';

import Title from '../../Title/Title';

import Classes from './Projects.module.scss';

const PROJECTS = [
  {
    name: 'EVOLVE',
    link: 'https://github.com/zoheiry/evolve',
    tags: ['Node.js', 'React', 'MongoDB'],
    poster: {
      src: evolvePoster,
      backgroundStyles: {
        backgroundPosition: '100% 100%',
      },
    },
  },
  {
    name: 'TRANSACTION\nINSIGHTS',
    link: 'https://github.com/zoheiry/transactions-parser',
    tags: ['Machine learning', 'Python', 'React'],
    poster: {
      src: transactionInsightsPoster,
      backgroundStyles: {
        backgroundSize: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 90%',
        backgroundColor: '#5e3b43',
      }
    }
  },
  {
    name: 'GAME DEV\nTUTORIALS',
    link: 'https://www.youtube.com/@AliElZoheiry/',
    tags: ['Video Tutorials', 'Game Development', 'Unreal Engine 5'],
    poster: {
      src: youTubePoster,
      backgroundStyles: {
        backgroundPosition: '100% 90%',
        backgroundColor: '#5e3b43',
      }
    }
  },
  {
    name: 'GALAXY\nSHOOTER',
    link: 'https://github.com/zoheiry/galaxy-shooter',
    tags: ['Game', 'Unity', 'C#'],
    poster: {
      src: galaxyShooterPoster,
      backgroundStyles: {
        backgroundPosition: '50% 100%',
      },
    },
  },
  {
    name: 'RECKON',
    link: 'https://github.com/zoheiry/reckon-app',
    tags: ['Mobile game', 'React native', 'Expo'],
    poster: {
      src: reckonPoster,
      backgroundStyles: {
        backgroundColor: '#823ffe',
        backgroundPosition: '100% 100%',
      }
    }
  },
];

const Projects = ({ fullpageApi }) => {
  const carousel = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleWheel = (event) => {
    if(!carousel.current) return;
    const reachedEnd = carousel.current.scrollLeft + carousel.current.clientWidth >= carousel.current.scrollWidth - 1;
    
    if (reachedEnd && event.deltaY > 0 && !isScrolling) {
      setIsScrolling(true);
      setTimeout(() => {
        setIsScrolling(false);
      }, 1500);
      fullpageApi.moveSectionDown();
      return;
    }

    if (carousel.current.scrollLeft === 0 && event.deltaY < 0 && !isScrolling) {
      setIsScrolling(true);
      setTimeout(() => {
        setIsScrolling(false);
      }, 1500);
      fullpageApi.moveSectionUp();
      return;
    }
    if (event.deltaY !== 0) {
      carousel.current.scrollBy({
        left: event.deltaY * 5,
        behavior: 'smooth'
      });
    }
};

  return (
    <div className={Classes.root}>
      <div className={Classes.textContent}>
        <Title>SIDE <br /> PROJECTS</Title>
        <BodyText as="p">Some random things I had fun building</BodyText>
      </div>
      <ul className={`${Classes.projectsList} normalScroll`} onWheel={(event) => handleWheel(event, carousel?.current)} ref={carousel}>
        {PROJECTS.map(({ name, link, poster, tags }) => (
          <li className={Classes.projectCardWrapper} key={link}>
            <a
              className={Classes.projectCard}
              href={link}
              style={{ backgroundImage: `url("${poster.src}")`, ...(poster.backgroundStyles || {})}}
              target="_blank"
              rel="noreferrer"
            >
              <div className={Classes.overlay} />
              <pre className={Classes.projectName}>{name}</pre>
              <ul className={Classes.projectTags}>
                {tags?.map((tag) => (
                  <li key={`${name}-${tag}`}>
                    <BodyText as="span">
                      <FontAwesomeIcon icon={faHashtag}/>
                      &nbsp;{tag}
                    </BodyText>
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;