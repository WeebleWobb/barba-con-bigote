import React from 'react';
import { twMerge } from 'tailwind-merge';

type HeaderLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeaderProps {
  children: React.ReactNode;
  level: HeaderLevel;
  className?: string;
  id?: string;
}

const Header: React.FC<HeaderProps> = ({ children, level, className, id }) => {
  const baseStyles = 'font-orelega text-brown';

  // Default styles based on heading level
  const defaultStyles = {
    1: 'text-5xl mb-6',
    2: 'text-4xl mb-5',
    3: 'text-3xl mb-4',
    4: 'text-2xl mb-3',
    5: 'text-xl mb-2',
    6: 'text-lg mb-1',
  };

  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Component id={id} className={twMerge(baseStyles, defaultStyles[level], className)}>
      {children}
    </Component>
  );
};

export default Header; 