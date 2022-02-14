import image from './images/my-avatar.png';

export type TSlide = {
  id: string;
  background: {
    color?: string;
    image?: string;
    video?: string;
  },
  contentColor: string;
}

const slidesConfig: { [key: string]: TSlide } = {
  INTRO: {
    id: 'intro',
    background: {
      color: '#F0E4FF',
    },
    contentColor: '#F95C32',
  },

  ABOUT: {
    id: 'about',
    background: {
      color: '#F95C32',
    },
    contentColor: '#F0E4FF',
  },
  CITY: {
    id: 'city',
    background: {
      image: image,
    },
    contentColor: '#FFFFFF',
  }
}

export default slidesConfig;