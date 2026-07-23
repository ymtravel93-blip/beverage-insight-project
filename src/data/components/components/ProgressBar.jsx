import React from 'react';

export default function ProgressBar({ current, total }) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 px-4">
      <div className="flex justify-between items-center mb-2 text-xs tracking-widest text-charcoal/60 uppercase">
        <span>Progress</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full h-[2px] bg-ivory-border overflow-hidden rounded-full">
        <div 
          className="h-full bg-copper transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
