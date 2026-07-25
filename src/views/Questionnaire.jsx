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
    if (currentQ.type === 'single' || currentQ.type === 'image_select' || currentQ.type === 'scale' || currentQ.type === 'dropdown') {
      setAnswers(prev => ({ ...prev, [currentQ.id]: [optionId] }));
    } else if (currentQ.type === 'multiple') {
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

  // Check if current step has a valid input
  const isValid = Array.isArray(currentAnswers) ? currentAnswers.length > 0 : Boolean(currentAnswers && currentAnswers.trim());

  return (
    <div className="max-w-3xl mx-auto px-6 py-6 flex flex-col min-h-[calc(100vh-120px)] justify-between">
      <div>
        <ProgressBar current={currentIndex + 1} total={QUESTIONS.length} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-2"
          >
            {/* Section Badge */}
            <span className="text-[10px] uppercase tracking-[0.25em] text-copper font-medium block mb-2">
              {currentQ.section}
            </span>

            {/* Question Title & Subtitle */}
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal leading-snug mb-2">
              {currentQ.title}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/60 font-light mb-6">
              {currentQ.subtitle}
            </p>

            {/* 1. DROPDOWN TYPE (Question 1) */}
            {currentQ.type === 'dropdown' && (
              <div className="mb-6">
                <select
                  value={currentAnswers[0] || ''}
                  onChange={(e) => handleSelectOption(e.target.value)}
                  className="w-full p-4 bg-white border border-ivory-border text-charcoal text-sm rounded-sm focus:outline-none focus:border-copper"
                >
                  <option value="" disabled>Select your city...</option>
                  {currentQ.options.map(opt => (
                    <option key={opt.id} value={opt.label}>{opt.label}</option>
                  ))}
                </select>
              </div>
            )}

            {/* 2. SCALE TYPE 1-5 (Question 11) */}
            {currentQ.type === 'scale' && (
              <div className="py-6">
                <div className="flex justify-between max-w-md mx-auto mb-4">
                  {[1, 2, 3, 4, 5].map(num => (
                    <button
                      key={num}
                      onClick={() => handleSelectOption(num.toString())}
                      className={`w-12 h-12 rounded-full border text-sm font-medium transition-all ${
                        currentAnswers[0] === num.toString()
                          ? 'bg-copper text-white border-copper shadow'
                          : 'border-ivory-border bg-white text-charcoal hover:border-copper'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between max-w-md mx-auto text-xs text-charcoal/50 font-light">
                  <span>{currentQ.minLabel}</span>
                  <span>{currentQ.maxLabel}</span>
                </div>
              </div>
            )}

            {/* 3. SHORT & LONG TEXT INPUTS (Questions 13 & 20) */}
            {(currentQ.type === 'text_short' || currentQ.type === 'text_long') && (
              <div className="mb-6">
                <textarea
                  rows={currentQ.type === 'text_long' ? 4 : 2}
                  placeholder="Type your response here..."
                  value={typeof currentAnswers === 'string' ? currentAnswers : ''}
                  onChange={(e) => handleTextChange(e.target.value)}
                  className="w-full p-4 bg-white border border-ivory-border text-charcoal text-sm rounded-sm focus:outline-none focus:border-copper resize-none"
                />
              </div>
            )}

            {/* 4. IMAGE CARDS GRID (Questions 15, 16, 17) */}
            {currentQ.type === 'image_select' && (
              <div className="grid grid-cols-2 gap-4">
                {currentQ.options.map(option => (
                  <QuestionCard
                    key={option.id}
                    type="image_select"
                    option={option}
                    isSelected={currentAnswers.includes(option.id)}
                    onSelect={() => handleSelectOption(option.id)}
                  />
                ))}
              </div>
            )}

            {/* 5. STANDARD MULTIPLE / SINGLE CHOICE CARDS */}
            {(currentQ.type === 'single' || currentQ.type === 'multiple') && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map(option => (
                  <QuestionCard
                    key={option.id}
                    type="standard"
                    option={option}
                    isSelected={currentAnswers.includes(option.id)}
                    onSelect={() => handleSelectOption(option.id)}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Footer */}
      <div className="pt-6 pb-4 flex justify-between items-center border-t border-ivory-border/60 mt-6">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0 || isSubmitting}
          className={`text-xs uppercase tracking-widest font-medium ${
            currentIndex === 0 ? 'text-charcoal/20 cursor-not-allowed' : 'text-charcoal/60 hover:text-charcoal'
          }`}
        >
          ← Back
        </button>

        <button
          onClick={handleNext}
          disabled={!isValid || isSubmitting}
          className={`px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all ${
            isValid && !isSubmitting
              ? 'bg-charcoal text-ivory hover:bg-copper cursor-pointer shadow-sm'
              : 'bg-ivory-border text-charcoal/30 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? 'Recording...' : currentIndex === QUESTIONS.length - 1 ? 'Complete Study' : 'Continue →'}
        </button>
      </div>
    </div>
  );
}
