import { ReactNode } from 'react';
import amsterdamVideoSrc from './videos/amsterdam-bike-ride.mp4';
import Intro from './components/Slides/Intro/Intro';
import About from './components/Slides/About/About';
import City from './components/Slides/City/City';
import Projects from './components/Slides/Projects/Projects';
import Contact from './components/Slides/Contact/Contact';


export type TSlide = {
  id: string;
  background: {
    color?: string;
    image?: string;
    video?: string;
  },
  contentColor: string;
  Component: ReactNode,
}

const slidesConfig: TSlide[] = [
  {
    id: 'intro',
    background: {
      color: '#F0E4FF',
    },
    contentColor: '#F95C32',
    Component: Intro,
  },
  {
    id: 'projects',
    background: {
      color: '#FFF0EC',
    },
    contentColor: '#7232F9',
    Component: Projects,
  },
  {
    id: 'about',
    background: {
      color: '#F95C32',
    },
    contentColor: '#F0E4FF',
    Component: About,
  },
  {
    id: 'city',
    background: {
      video: amsterdamVideoSrc,
    },
    contentColor: '#FFFFFF',
    Component: City,
  },
  {
    id: 'contact',
    background: {
      color: '#F0E4FF',
    },
    contentColor: '#F95C32',
    Component: Contact,
  },
];

export default slidesConfig;