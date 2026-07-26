import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUESTIONS } from '../data/questions';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';

export default function Questionnaire({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQ = QUESTIONS[currentIndex];
  const currentAnswers = answers[currentQ.id] || [];

  const handleSelectOption = (optionId) => {
    if (currentQ.type === 'standard_single' || currentQ.type === 'font_preview_single' || currentQ.type === 'scale') {
      setAnswers(prev => ({ ...prev, [currentQ.id]: [optionId] }));
    } else if (currentQ.type === 'standard_multi') {
      const exists = currentAnswers.includes(optionId);
      if (exists) {
        setAnswers(prev => ({
          ...prev,
          [currentQ.id]: currentAnswers.filter(id => id !== optionId)
        }));
      } else {
        if (currentQ.maxSelect && currentAnswers.length >= currentQ.maxSelect) return;
        setAnswers(prev => ({
          ...prev,
          [currentQ.id]: [...currentAnswers, optionId]
        }));
      }
    }
  };

  const handleDualSelect = (key, value) => {
    const existing = answers[currentQ.id] || {};
    setAnswers(prev => ({
      ...prev,
      [currentQ.id]: { ...existing, [key]: value }
    }));
  };

  const handleTextChange = (text) => {
    setAnswers(prev => ({ ...prev, [currentQ.id]: text }));
  };

  const handleNext = () => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await onComplete(answers);
    setIsSubmitting(false);
  };

  const isDualValid = currentQ.type === 'dual_select' && answers[currentQ.id]?.city && answers[currentQ.id]?.age;
  const isArrayValid = Array.isArray(currentAnswers) && currentAnswers.length > 0;
  const isTextValid = typeof currentAnswers === 'string' && currentAnswers.trim().length > 0;
  const isValid = isDualValid || isArrayValid || isTextValid;

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col min-h-[calc(100vh-100px)] justify-between">
      <div>
        <ProgressBar current={currentIndex + 1} total={QUESTIONS.length} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-4"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B38B59] font-medium block mb-2">
              {currentQ.section}
            </span>

            <h2 className="font-serif text-2xl sm:text-4xl text-[#EFECE6] font-normal leading-snug mb-2">
              {currentQ.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#A09D98] font-light mb-8">
              {currentQ.subtitle}
            </p>

            {/* DUAL SELECTOR (Location + Age) */}
            {currentQ.type === 'dual_select' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="text-[10px] text-[#A09D98] uppercase tracking-wider block mb-2 font-medium">Location</label>
                  <select
                    value={answers[currentQ.id]?.city || ''}
                    onChange={(e) => handleDualSelect('city', e.target.value)}
                    className="w-full p-4 bg-[#1A1A1A] border border-[#2A2825] text-[#EFECE6] text-sm rounded-sm focus:outline-none focus:border-[#B38B59]"
                  >
                    <option value="" disabled>Select location...</option>
                    {currentQ.options.cities.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] text-[#A09D98] uppercase tracking-wider block mb-2 font-medium">Age Group</label>
                  <select
                    value={answers[currentQ.id]?.age || ''}
                    onChange={(e) => handleDualSelect('age', e.target.value)}
                    className="w-full p-4 bg-[#1A1A1A] border border-[#2A2825] text-[#EFECE6] text-sm rounded-sm focus:outline-none focus:border-[#B38B59]"
                  >
                    <option value="" disabled>Select age group...</option>
                    {currentQ.options.ages.map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
              </div>
            )}

            {/* TEXT & FONT SELECTION CARDS */}
            {(currentQ.type === 'standard_single' || currentQ.type === 'standard_multi' || currentQ.type === 'font_preview_single') && (
              <div className="grid grid-cols-1 gap-3">
                {currentQ.options.map(option => (
                  <QuestionCard
                    key={option.id}
                    option={option}
                    isSelected={currentAnswers.includes(option.id)}
                    onSelect={() => handleSelectOption(option.id)}
                  />
                ))}
              </div>
            )}

            {/* SCALE 1-5 */}
            {currentQ.type === 'scale' && (
              <div className="py-8 px-6 bg-[#1A1A1A] border border-[#2A2825] rounded-sm">
                <div className="flex justify-between max-w-md mx-auto mb-6">
                  {[1, 2, 3, 4, 5].map(num => (
                    <button
                      key={num}
                      onClick={() => handleSelectOption(num.toString())}
                      className={`w-12 h-12 rounded-full border text-sm font-medium transition-all ${
                        currentAnswers[0] === num.toString()
                          ? 'bg-[#B38B59] text-[#121212] border-[#B38B59] shadow'
                          : 'border-[#2A2825] bg-[#121212] text-[#A09D98] hover:border-[#B38B59]'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between max-w-md mx-auto text-xs text-[#A09D98] font-light">
                  <span>{currentQ.minLabel}</span>
                  <span>{currentQ.maxLabel}</span>
                </div>
              </div>
            )}

            {/* OPEN TEXT AREA */}
            {currentQ.type === 'text_long' && (
              <div className="mb-6">
                <textarea
                  rows={5}
                  placeholder="Type your response here..."
                  value={typeof currentAnswers === 'string' ? currentAnswers : ''}
                  onChange={(e) => handleTextChange(e.target.value)}
                  className="w-full p-5 bg-[#1A1A1A] border border-[#2A2825] text-[#EFECE6] text-sm rounded-sm focus:outline-none focus:border-[#B38B59] resize-none"
                />
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="pt-8 pb-4 flex justify-between items-center border-t border-[#2A2825] mt-8">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0 || isSubmitting}
          className={`text-xs uppercase tracking-widest font-medium ${
            currentIndex === 0 ? 'text-[#A09D98]/20 cursor-not-allowed' : 'text-[#A09D98] hover:text-[#EFECE6]'
          }`}
        >
          ← Back
        </button>

        <button
          onClick={handleNext}
          disabled={!isValid || isSubmitting}
          className={`px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all ${
            isValid && !isSubmitting
              ? 'bg-[#B38B59] text-[#121212] hover:bg-[#9B7547] cursor-pointer shadow-md'
              : 'bg-[#2A2825] text-[#A09D98]/30 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? 'Recording...' : currentIndex === QUESTIONS.length - 1 ? 'Complete Study' : 'Continue →'}
        </button>
      </div>
    </div>
  );
}
