import React from 'react';

import Classes from './Title.module.scss';

type Props = {
  children?: React.ReactNode;
  as?: string;
  className?: string;
}

const Title = ({ children, as = 'h1', className = '' }: Props) => {
  const Component = as;
  return (
    <Component className={`${Classes.root} ${className}`}>{children}</Component>
  );
}

export default Title;