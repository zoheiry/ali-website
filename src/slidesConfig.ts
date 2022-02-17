import amsterdamVideoSrc from './videos/amsterdam-bike-ride.mp4';

export type TSlide = {
  id: string;
  background: {
    color?: string;
    image?: string;
    video?: string;
  },
  contentColor: string;
}

const slidesConfig: TSlide[] = [
  {
    id: 'intro',
    background: {
      color: '#F0E4FF',
    },
    contentColor: '#F95C32',
  },
  {
    id: 'about',
    background: {
      color: '#F95C32',
    },
    contentColor: '#F0E4FF',
  },
  {
    id: 'city',
    background: {
      video: amsterdamVideoSrc,
    },
    contentColor: '#FFFFFF',
  },
  {
    id: 'skills',
    background: {
      color: '#FFF0EC',
    },
    contentColor: '#7232F9',
  },
  {
    id: 'contact',
    background: {
      color: '#F0E4FF',
    },
    contentColor: '#F95C32',
  },
];

export default slidesConfig;