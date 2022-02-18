import React from 'react';

import Classes from './SubTitle.module.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
  as?: string;
}

const SubTitle = ({ children, as = 'p', className = '' }: Props) => {
  const Component = as;
  return (
    <Component className={`${Classes.root} ${className}`}>{children}</Component>
  );
};

export default SubTitle;