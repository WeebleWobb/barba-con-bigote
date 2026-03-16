import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ParagraphProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className, id }) => {
  return (
    <p id={id} className={twMerge('text-brown text-lg mb-2 last:mb-0', className)}>
      {children}
    </p>
  );
};

export default Paragraph;
