import React from 'react';

export default function QuestionCard({ option, isSelected, onSelect, hasImage }) {
  if (hasImage) {
    return (
      <div
        onClick={onSelect}
        className={`
          group cursor-pointer rounded-sm border overflow-hidden transition-all duration-300 relative text-left bg-charcoal-light
          ${isSelected ? 'border-copper ring-1 ring-copper' : 'border-ivory-border/20 hover:border-copper/50'}
        `}
      >
        <div className="h-28 w-full overflow-hidden relative">
          <img 
            src={option.image} 
            alt={option.label}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        </div>
        <div className="p-3 flex items-center justify-between bg-charcoal">
          <span className="text-xs font-medium text-ivory group-hover:text-copper transition-colors">
            {option.label}
          </span>
          <div className={`
            w-4 h-4 rounded-full border flex items-center justify-center shrink-0
            ${isSelected ? 'border-copper bg-copper' : 'border-ivory-border/40'}
          `}>
            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onSelect}
      className={`
        cursor-pointer p-5 rounded-sm border text-left transition-all duration-300 relative
        ${isSelected 
          ? 'border-copper bg-copper-light/10 text-charcoal' 
          : 'border-ivory-border bg-white/80 hover:border-copper/40 hover:bg-white'}
      `}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-charcoal leading-snug">
          {option.label}
        </span>
        <div className={`
          w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-4
          ${isSelected ? 'border-copper bg-copper' : 'border-ivory-border'}
        `}>
          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
        </div>
      </div>
    </div>
  );
}
