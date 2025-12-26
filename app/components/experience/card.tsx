import { ReactNode, AriaAttributes } from 'react';
import { twMerge } from 'tailwind-merge'

interface CardContainerProps extends AriaAttributes {
  readonly children: ReactNode;
  className?: string;
}

export default function Card({ children, className, ...ariaProps }: Readonly<CardContainerProps>) {
  return (
    <section
      {...ariaProps}
      className={
        twMerge(
          'bg-tan border-brown border-[3px] border-solid rounded-2xl shadow-lg p-6 w-full relative overflow-hidden', className
          )
        }
      >
        <div className="relative z-10">
          {children}
        </div>
    </section>
  );
}
