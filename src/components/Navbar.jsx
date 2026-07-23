import React from 'react';

export default function Navbar({ onReset }) {
  return (
    <header className="w-full py-8 px-6 md:px-12 flex justify-between items-center border-b border-ivory-border/60 bg-ivory/80 backdrop-blur-md sticky top-0 z-40 transition-all">
      <div 
        onClick={onReset}
        className="cursor-pointer group flex items-center space-x-3"
      >
        <span className="text-xs uppercase tracking-[0.25em] font-medium text-charcoal group-hover:text-copper transition-colors">
          The Beverage Insight Project
        </span>
      </div>
      <div className="text-[11px] uppercase tracking-[0.2em] text-charcoal/50 hidden sm:block font-light">
        Independent Industry Report · India
      </div>
    </header>
  );
}
