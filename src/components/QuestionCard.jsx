import React from 'react';

export default function QuestionCard({ option, isSelected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`relative cursor-pointer rounded-sm overflow-hidden border transition-all duration-200 bg-[#1A1A1A] group ${
        isSelected
          ? 'border-[#B38B59] ring-1 ring-[#B38B59] shadow-lg'
          : 'border-[#2A2825] hover:border-[#B38B59]/50'
      }`}
    >
      {/* Background Image Container */}
      <div className="relative h-32 sm:h-40 w-full overflow-hidden">
        <img
          src={option.image}
          alt={option.label}
          className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />

        {/* Selection Checkmark */}
        <div className="absolute top-3 right-3">
          <div
            className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
              isSelected
                ? 'bg-[#B38B59] border-[#B38B59] text-[#121212]'
                : 'border-white/40 bg-black/30'
            }`}
          >
            {isSelected && <span className="text-xs font-bold">✓</span>}
          </div>
        </div>
      </div>

      {/* Content Block */}
      <div className="p-4 text-left flex flex-col justify-between">
        {/* TYPOGRAPHY VISUAL PREVIEW BOX */}
        {option.sampleText && (
          <div className="mb-3 py-2 px-3 bg-[#121212] rounded border border-[#2A2825] text-center min-h-[44px] flex items-center justify-center">
            <span className={`${option.fontStyle || 'text-sm'} text-[#EFECE6]`}>
              "{option.sampleText}"
            </span>
          </div>
        )}

        <span className="text-xs font-medium text-[#EFECE6] leading-snug">
          {option.label}
        </span>
      </div>
    </div>
  );
}
