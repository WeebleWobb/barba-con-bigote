import { twMerge } from 'tailwind-merge';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={twMerge('animate-pulse rounded-md bg-brown/10', className)}
      {...props}
    />
  );
}

export { Skeleton };
