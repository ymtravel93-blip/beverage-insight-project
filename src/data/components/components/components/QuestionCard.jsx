import React from 'react';

export default function QuestionCard({ option, isSelected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`
        smooth-bg group cursor-pointer p-6 rounded-sm border text-left transition-all duration-300 relative overflow-hidden
        ${isSelected 
          ? 'border-copper bg-copper-light/30 shadow-sm' 
          : 'border-ivory-border bg-white hover:border-copper/40 hover:bg-ivory/50'}
      `}
    >
      <div className="flex items-start justify-between">
        <div className="pr-6">
          <h4 className="text-base font-medium text-charcoal group-hover:text-copper transition-colors leading-snug">
            {option.label}
          </h4>
          {option.detail && (
            <p className="mt-1.5 text-xs text-charcoal/60 leading-relaxed font-light">
              {option.detail}
            </p>
          )}
        </div>
        <div className={`
          w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300
          ${isSelected ? 'border-copper bg-copper' : 'border-ivory-border group-hover:border-copper/50'}
        `}>
          {isSelected && (
            <div className="w-2 h-2 rounded-full bg-white" />
          )}
        </div>
      </div>
    </div>
  );
}
