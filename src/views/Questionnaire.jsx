{/* FONT PREVIEW SELECTION CARDS */}
{currentQ.type === 'font_preview_single' && (
  <div className="grid grid-cols-1 gap-4">
    {currentQ.options.map(option => {
      const isSelected = currentAnswers.includes(option.id);
      return (
        <div
          key={option.id}
          onClick={() => handleSelectOption(option.id)}
          className={`
            cursor-pointer p-5 sm:p-6 rounded-sm border text-left transition-all duration-300 relative flex flex-col justify-between space-y-4
            ${isSelected 
              ? 'border-[#B38B59] bg-[#B38B59]/15 shadow-lg scale-[1.01]' 
              : 'border-[#2A2825] bg-[#1A1A1A] hover:border-[#B38B59]/50 hover:bg-[#1A1A1A]/80'}
          `}
        >
          {/* Header Row */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B38B59]">
                {option.label}
              </span>
              <p className="text-[11px] text-[#A09D98] font-light mt-0.5">
                {option.description}
              </p>
            </div>
            
            {/* Selection Check Circle */}
            <div className={`
              w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-4
              ${isSelected ? 'border-[#B38B59] bg-[#B38B59]' : 'border-[#2A2825]'}
            `}>
              {isSelected && <div className="w-2 h-2 rounded-full bg-[#121212]" />}
            </div>
          </div>

          {/* Interactive Font Preview Box */}
          <div className="p-4 bg-[#121212] border border-[#2A2825] rounded-sm text-center overflow-hidden flex items-center justify-center min-h-[64px]">
            <span className={option.fontClass}>
              {option.sampleText}
            </span>
          </div>
        </div>
      );
    })}
  </div>
)}
