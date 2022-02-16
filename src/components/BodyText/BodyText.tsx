import React from 'react';

import Classes from './BodyText.module.scss';

type Props = {
  children?: React.ReactNode;
  className?: string;
  as?: string;
}

const BodyText = ({ children, as = 'p', className = '' }: Props) => {
  const Component = as;
  return (
    <Component className={`${Classes.root} ${className}`}>{children}</Component>
  );
};

export default BodyText;