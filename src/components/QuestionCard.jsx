import React from 'react';

export default function QuestionCard({ option, isSelected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`
        cursor-pointer p-5 rounded-sm border text-left transition-all duration-200 relative flex flex-col justify-between
        ${isSelected 
          ? 'border-[#B38B59] bg-[#B38B59]/15 shadow-md' 
          : 'border-[#2A2825] bg-[#1A1A1A] text-[#A09D98] hover:border-[#B38B59]/50 hover:text-[#EFECE6]'}
      `}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#B38B59]">
          {option.label}
        </span>
        <div className={`
          w-4 h-4 rounded-full border flex items-center justify-center shrink-0
          ${isSelected ? 'border-[#B38B59] bg-[#B38B59]' : 'border-[#2A2825]'}
        `}>
          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#121212]" />}
        </div>
      </div>

      {/* SAMPLE TEXT PREVIEW (For Font/Style Questions) */}
      {option.sampleText && (
        <div className="my-2 p-3 bg-[#121212] border border-[#2A2825] rounded-sm text-center">
          <span className={option.fontClass || "text-sm text-[#EFECE6]"}>
            "{option.sampleText}"
          </span>
        </div>
      )}

      {option.description && (
        <p className="text-xs text-[#A09D98] font-light mt-1">
          {option.description}
        </p>
      )}
    </div>
  );
}
