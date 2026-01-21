import React from 'react';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div className={`animate-pulse bg-stone-200 rounded ${className}`}></div>
  );
};

export const ImageSkeleton: React.FC = () => {
  return (
    <div className="aspect-square overflow-hidden bg-stone-200 animate-pulse">
      <div className="w-full h-full"></div>
    </div>
  );
};

export const TextSkeleton: React.FC<{ lines?: number }> = ({ lines = 1 }) => {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-4 bg-stone-200 rounded animate-pulse"></div>
      ))}
    </div>
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="space-y-4">
      <ImageSkeleton />
      <div className="space-y-2">
        <Skeleton className="h-6 w-3/4 mx-auto" />
        <Skeleton className="h-4 w-1/2 mx-auto" />
        <Skeleton className="h-4 w-2/3 mx-auto" />
      </div>
    </div>
  );
};

export default Skeleton;
