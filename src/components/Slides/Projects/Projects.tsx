import React, {useRef, useState, useEffect} from 'react';
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
  const [showPrevControls, setShowPrevControls] = useState(false);
  const [showNextControls, setShowNextControls] = useState(true);
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const isMobile = size.width < 768;

  useEffect(() => {
    handleScrollChange();

    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScrollChange = () => {
    console.log('called')
    const carouselDomElement = carousel?.current;

    if (carouselDomElement) {
      setShowPrevControls(carouselDomElement.scrollLeft > 300);
      setShowNextControls(carouselDomElement.scrollLeft + carouselDomElement.clientWidth + 200 < carouselDomElement.scrollWidth);
    }
  }

  const scrollCarousel = (factor) => {
    const carouselDomElement = carousel?.current;

    if (carouselDomElement) {
      carouselDomElement.scrollBy({
        left: carouselDomElement.clientWidth * factor,
        behavior: 'smooth'
      });
      handleScrollChange();
    }
  }

  const handleNextClick = () => {
    scrollCarousel(1);
  }

  const handlePrevClick = () => {
    scrollCarousel(-1);
  }

  return (
    <div className={Classes.root}>
      <div className={Classes.textContent}>
        <Title>SIDE <br /> PROJECTS</Title>
        <BodyText as="p">Some random things I had fun building</BodyText>
      </div>
      <div className={Classes.scrollWrapper}>
        <div className={Classes.controls}>
          {showPrevControls && <div className={Classes.previous} onClick={handlePrevClick}>{`<`}</div>}
          {showNextControls && <div className={Classes.next} onClick={handleNextClick}>{`>`}</div>}
        </div>
        <ul className={`${Classes.projectsList} ${isMobile ? 'normalScroll' : ''}`} ref={carousel} onScroll={handleScrollChange}>
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
    </div>
  );
};

export default Projects;